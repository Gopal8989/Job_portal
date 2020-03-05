const mysql = require("mysql");
const express = require("express");
var app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const common = require("./routes/api/common.routes");
app.use(cors("Access-Control-Allow-Origin", "*"));
app.use(bodyparser.json());

app.get("/", function(req, res) {
  console.log("server");
  res.send("server connected");
});
require("./routes/api/common.routes")(app);

app.listen(5000, () => console.log("express server is running port 5000"));
