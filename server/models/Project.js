const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  stack: {
    type: Array,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  requiredTeamSize: {
    type: Number,
    equired: true
  },
  createdBy: {
    type: ObjectId,
    required: true
  },
  members: [ObjectId],
  freeSpaces: Number,
  creationDate: { type: Date, default: Date.now }
});

ProjectSchema.methods.updateMembersArray = function(newMember) {
  this.freeSpaces = this.requiredTeamSize - this.members.length;
};

const Project = mongoose.model("Project", ProjectSchema);

module.exports = { Project };
