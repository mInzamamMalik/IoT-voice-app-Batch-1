var express = require("express");
var app = express();


app.get("/", function(request, response, next) {
    response.send("hello world")
})

app.get("/profile", function (request, response, next) {
    response.send("this is profile")
})

app.get("/contact", function (request, response, next) {
    response.send("this is contact")
})

app.listen(3000, function () {
    console.log("app is running on 3000")
})
