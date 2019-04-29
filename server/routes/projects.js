const express = require("express");
const router = express.Router();
const { Project } = require("../models/Project");
const { User } = require("../models/User");

//get all projects
router.get("/allProjects", (req, res) => {
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
// router.post("/:userId", (req, res) => {
//   User.findById(req.params.userId).then(user => {
//     if (!user) {
//       return res.send("User does not exist");
//     }
//   });
//   const data = {
//     name: req.body.name,
//     level: req.body.level,
//     stack: req.body.stack,
//     requiredTeamSize: req.body.requiredTeamSize,

//     description: req.body.description,
//     createdBy: req.params.userId
//   };

//   const newProject = new Project(data);
//   //newProject.updateMembersArray();
//   newProject
//     .save()
//     .then(doc => {
//       User.findOneAndUpdate(data.createdBy, {
//         $addToSet: { memberOf: doc._id }
//       })
//         .then(project => res.send({ sucess: "Project created", ...doc._doc }))
//         .catch(e => res.send("User not found"));
//     })
//     .catch(e => res.send(e));
// });

//Create project without user

router.post("/createProject", (req, res) => {
  const data = {
    name: req.body.name,
    level: req.body.level,
    stack: req.body.stack,
    requiredTeamSize: req.body.requiredTeamSize,
    description: req.body.description
  };

  const newProject = new Project(data);
  newProject
    .save()
    .then(project => res.send({ success: "Project created", project }))
    .catch(e => res.send("There was an error creating the project: " + e));
});

module.exports = router;
