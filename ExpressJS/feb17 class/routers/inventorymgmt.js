var express = require("express");

var inventoryRouter = express.Router();

inventoryRouter.get("/", function (req, res) {
    res.send(" Inventory -> Home called.");
});
inventoryRouter.get("/add", function (req, res) {
    res.send(" Inventory -> Add called.");
});
inventoryRouter.get("/modify", function (req, res) {
    res.send(" Inventory -> Modify called.");
});
inventoryRouter.get("/delete", function (req, res) {
    res.send(" Inventory -> Delete called.");
});

module.exports = inventoryRouter;


