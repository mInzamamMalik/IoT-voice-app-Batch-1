var express = require("express");
var path = require("path");

var app = express();

var publicPath = path.resolve(__dirname, "public");
console.log("publicPath is : ", publicPath);

app.use(express.static(publicPath));

app.use(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Looks like you didn't find a static file.");
});


app.listen(8080, function () {
    console.log("Starting server on port 8080");
});
