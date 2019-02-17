var express = require("express");

var app = express();

var userRouter = require("./routers/usermgmt");
var inventoryRouter =require("./routers/inventorymgmt");

app.use("/users", userRouter );
app.use("/inventory", inventoryRouter);

app.get("/", function(req, res) {
    res.send("either enter users or inventory");
});
app.listen(8088, function() {
 console.log("Server started .");
});