const express = require("express");
const mongoose = require("mongoose");
const app = express();
const users = require("./routes/users");
const projects = require("./routes/projects");
const bodyParser = require("body-parser");
const port = process.env.PORT || 4000;
require("dotenv").config();
const dbPassword = process.env.dbPassword;

const URI = `mongodb://user1:${dbPassword}@ds111455.mlab.com:11455/v8-chingu-geckos-15`;

mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(res => console.log("Ready to use database!"))
  .catch(e => console.log(e));

app.use(bodyParser.json());
//user routes
app.use("/api/users", users);
//project routes
app.use("/api/projects", projects);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
}

app.listen(port, () =>
  console.log(`
Example app listening on port ${port}!
`)
);
