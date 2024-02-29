const express = require("express");
const id = "127.0.0.1";
const app = express();
const static = express.static("static");
app.use("/", static);
app.listen(3000, () => {
  console.log("app running");
  console.log(`Server running on ${id}`);
});
