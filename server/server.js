const express = require("express");
const mongoose = require("mongoose");
const app = express();
const users = require("./routes/users");
const projects = require("./routes/projects");
const bodyParser = require("body-parser");
const { dbPassword } = require("./config");
const port = 4000;
console.log(dbPassword);
const URI = `mongodb://user1:${dbPassword}@ds111455.mlab.com:11455/v8-chingu-geckos-15`;

mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(res => console.log("Ready to use database!"))
  .catch(e => console.log(e));

app.use(bodyParser.json());
//user routes
app.use("/users", users);
//project routes
app.use("/projects", projects);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`
Example app listening on port ${port}!
`)
);
