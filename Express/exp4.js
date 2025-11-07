var express = require("express");
var app = express();
app.all("/", function (req, res) {
  res.send("Hello world!");
});
app.listen(3000);
