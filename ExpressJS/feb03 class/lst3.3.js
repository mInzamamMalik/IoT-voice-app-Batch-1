var express = require("express");

var app = express();

app.use(function(req, res) {
    res.send("Hellow Wrold from Middleware.");
});

app.listen(8080, function() {
    console.log("Starting server on port 8080");
});