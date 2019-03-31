var express = require("express");

var app = express();

app.get("/search", function (req, res) {
  var userId =   parseInt(req.query.userid);
  console.log(userId);
  res.send("value is :" + userId);

});

app.listen(8088, function () {

})