var express = require("express");
var app = express();

app.get("/random/:min/:operator/:max", function (req, res) {
    var min = parseInt(req.params.min);
    var max = parseInt(req.params.max);
    var operator = req.params.operator;
    
    if (isNaN(min) || isNaN(max)) {
        res.status(400);
        res.json({ error: "Bad request." });
        return;
    }
    // var result = Math.round((Math.random() * (max - min)) + min);
    var result;
    switch(operator){
        case "+":
            result = min + max;
            break;
        case "-":
            result = min - max;
            break;
        case "*":
            result = min * max;
            break;
        case "/":
            result = min / max;
            break;
        default:
            Response.send("invalid operator");

    }
            
    res.json({
        answer: result
    });
});
app.listen(8088, function () {
    console.log("App started on port 8088");
});



// var a = {
//     name: "malik",
//     class: "iot",
//     marks: 100,
//     subjects: ["asad",43434,"aasdsasd"],
//     pass: true,
//     family: {
//         brother: "yes",
//         sister: "No"
//     }
// }
// console.log(a.family.sister)
// console.log(a.subjects[1])










