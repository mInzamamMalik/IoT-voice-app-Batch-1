var express = require("express");

var app = express();

app.use(function (request, response, next) {
    console.log("In comes a " + request.method + " to " + request.url + " IP :"  + request.host);
    next();
});

app.use(function (request, response) {
    response.end("Hello, world!");
});

app.listen(8080, function () {
    console.log("Starting server on port 8080");
});