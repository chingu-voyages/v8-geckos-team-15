const express = require("express");
const app = express();
const users = require("./routes/users");
const projects = require("./routes/projects");
const bodyParser = require("./body-parser");
const port = 3000;

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
