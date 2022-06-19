const PORT = 4000;
const express = require("express");
const app = express();
const path = require("path");
const APIroute = require("./request/api/routes");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/api", APIroute);

app.get("/", (req, res) => {
  res.render("user");
});

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
