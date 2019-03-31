var express = require("express");

var userRouter = express.Router();

userRouter.get("/", function (req, res) {
    res.send(" User -> Home called.");
});
userRouter.get("/add", function (req, res) {
    res.send(" User -> Add called.");
});
userRouter.get("/modify", function (req, res) {
    res.send(" User -> Modify called.");
});
userRouter.get("/delete", function (req, res) {
    res.send(" User -> Delete called.");
});

module.exports = userRouter;


