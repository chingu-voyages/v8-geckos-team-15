const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const { Project } = require("../models/Project");

//get all users
router.get("/", (req, res) => {
  User.find()
    .then(user => res.send(user))
    .catch(e => res.send(e));
});

//create a new user
router.post("/", (req, res) => {
  User.findOne({ username: req.body.username }).then(user => {
    if (user) {
      return res.status(400).send({ username: "username already exists" });
    }
    const newUser = new User({
      username: req.body.username,
      firstname: req.body.firstname,
      surname: req.body.surname
    });
    newUser
      .save()
      .then(({ _doc }) => res.send({ success: "User saved", ..._doc }))
      .catch(e => res.send(e));
  });
});

//get user by id
router.get("/:userId", (req, res) => {
  User.findOne({ _id: req.params.userId })
    .then(user => {
      if (!user) {
        return res.send("User not found");
      }
      res.send(user);
    })
    .catch(e => res.send(e));
});

//join project
router.put("/:userId/joinproject/:projectId", (req, res) => {
  const errors = {};
  const success = {};
  Project.findById(req.params.projectId).then(project => {
    if (!project) {
      errors.project = "The project does not exist";
    } else if (project.members.indexOf(req.params.userId) !== -1) {
      errors.members = "User is already a member";
    } else {
      Project.findOneAndUpdate(
        {
          _id: project._id
        },
        {
          $addToSet: { members: req.params.userId }
        }
      )
        .then()
        .catch(e => req.send(e));
    }
  });

  User.findById(req.params.userId).then(user => {
    if (!user) {
      errors.user = "The user does not exist";
      res.send(errors);
    } else if (user.memberOf.indexOf(req.params.projectId) !== -1) {
      errors.memberOf = "User already a member of this project";
      res.send(errors);
    } else {
      User.findOneAndUpdate(
        {
          _id: user._id
        },
        {
          $addToSet: { memberOf: req.params.projectId }
        }
      )
        .then(user => {
          success.success = "User joined project";
          res.send(success);
        })
        .catch(e => res.send(e));
    }
  });
});

//leave project
router.put("/:userId/leaveproject/:projectId", (req, res) => {
  const errors = {};
  const success = {};
  Project.findById(req.params.projectId).then(project => {
    if (!project) {
      errors.project = "The project does not exist";
    } else if (project.members.indexOf(req.params.userId) === -1) {
      errors.members = "Project does not include this member";
    } else {
      Project.findOneAndUpdate(
        {
          _id: project._id
        },
        {
          $pull: { members: req.params.userId }
        }
      )
        .then()
        .catch(e => req.send(e));
    }
  });

  User.findById(req.params.userId).then(user => {
    if (!user) {
      errors.user = "The user does not exist";
      res.send(errors);
    } else if (user.memberOf.indexOf(req.params.projectId) === -1) {
      errors.memberOf = "User is not a member of this project";
      res.send(errors);
    } else {
      User.findOneAndUpdate(
        {
          _id: user._id
        },
        {
          $pull: { memberOf: req.params.projectId }
        }
      )
        .then(user => {
          success.success = "User left project";
          res.send(success);
        })
        .catch(e => res.send(e));
    }
  });
});

//leave all projects
router.put("/:userId/leaveAll", (req, res) => {
  User.findById(req.params.userId).then(user => {
    if (!user) {
      return req.send("User doesn't exist");
    }
    user.memberOf.forEach(projectId => {
      Project.findByIdAndUpdate(projectId, {
        $unset: { members: req.params.userId }
      })
        .then(project => console.log("Members updated"))
        .catch(e => console.lof("Error"));
    });
  });

  User.findByIdAndUpdate(req.params.userId, { $set: { memberOf: [] } })
    .then(() => {
      res.send({ sucess: "All projects left" });
    })
    .catch(e => req.send(e));
});

module.exports = router;
