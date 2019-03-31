var express = require("express");
var bodyParser = require('body-parser')
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json())

/////////////////////////////////////////////////////////////////////////////////////////////////
var dbURI = "mongodb://abc123:abc123@ds349065.mlab.com:49065/iot-class";
// let dbURI = 'mongodb://localhost/mydatabase';

mongoose.connect(dbURI)
    .catch((e) => {
        console.log("catch error: ", e)
    })


////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on('connected', function () {//connected
    console.log("Mongoose is connected");
})

mongoose.connection.on('disconnected', function () {//disconnected
    console.log("Mongoose is disconnected");
    process.exit(1);
});

mongoose.connection.on('error', function (err) {//any error
    console.log('Mongoose connection error: ', err);
    process.exit(1);
})

process.on('SIGINT', function () {/////this function will run jst before app is closing
    console.log("app is terminating");
    mongoose.connection.close(function () {
        console.log('Mongoose default connection closed');
        process.exit(0);
    });
});
////////////////mongodb connected disconnected events///////////////////////////////////////////////


var userSchema = new mongoose.Schema({
    "name": String,
    "email": String,
    "joinedDate": { type: Date, default: Date.now },
    "isActive": { type: Boolean, default: true }

});
var userModel = mongoose.model("user", userSchema);



app.get("/", function (req, res) {
    res.send("you just sent a GET request, friend");
});

app.post("/user", function (req, res) {

    var newUser = new userModel({
        "name": req.body.name,
        "email": req.body.email
    })
    newUser.save((userSaved) => {
        // userSaved
        console.log("saved")
    })

    res.send("signup successful");
});

app.get("/users", function (req, res) {

    console.log("req.params.name: ", req.params.name)

    userModel.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            res.status(404).send("not found")
        }
    })

});

app.get("/user/:name", function (req, res) {

    console.log("req.params.name: ", req.params.name)

    userModel.find({ name: req.params.name }, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            res.status(404).send("not found")
        }
    })

});

app.delete("/user/:name", function (req, res) {

    console.log("req.params.name: ", req.params.name)

    userModel.find({ name: req.params.name })
        .remove((err) => {
            if(!err){
                res.send("removed")
            }else{
                res.status(500).send("something went wrong while deleting")
            }
        })

});




app.listen(8088, function () {
    console.log("App is listening on port 8088");
});