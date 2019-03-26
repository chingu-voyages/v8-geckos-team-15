const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { dbPassword } = require("./config");
const port = 3000;
console.log(dbPassword);
const URI = `mongodb://user1:${dbPassword}@ds111455.mlab.com:11455/v8-chingu-geckos-15`;

mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(res => console.log("Ready to use database!"))
  .catch(e => console.log(e));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`
Example app listening on port ${port}!
`)
);
