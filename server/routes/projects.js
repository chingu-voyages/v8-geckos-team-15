const express = require("express");
const router = express.Router();
const { Project } = require("../models/Project");
const { User } = require("../models/User");

//get all projects
router.get("/", (req, res) => {
  Project.find()
    .then(project => res.send(project))
    .catch(e => res.send("Project not found"));
});

//get project by id
router.get("/:projectId", (req, res) => {
  Project.findOne({ _id: req.params.projectId })
    .then(project => {
      if (!project) {
        return res.send("Project not found");
      }
      res.send(project);
    })
    .catch(e => res.send(e));
});

//create project
router.post("/:userId", (req, res) => {
  User.findById(req.params.userId).then(user => {
    if (!user) {
      return res.send("User does not exist");
    }
  });
  const data = {
    name: req.body.name,
    level: req.body.level,
    stack: req.body.stack,
    requiredTeamSize: req.body.requiredTeamSize,
    members: [req.params.userId],
    description: req.body.description,
    createdBy: req.params.userId
  };

  const newProject = new Project(data);
  newProject.updateMembersArray();
  newProject
    .save()
    .then(doc => {
      User.findOneAndUpdate(data.createdBy, {
        $addToSet: { memberOf: doc._id }
      })
        .then(project => res.send({ sucess: "Project created", ...doc._doc }))
        .catch(e => res.send("User not found"));
    })
    .catch(e => res.send(e));
});

module.exports = router;
