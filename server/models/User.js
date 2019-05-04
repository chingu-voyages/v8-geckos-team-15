const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  memberOf: [ObjectId],
  signupDate: { type: Date, default: Date.now }
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
