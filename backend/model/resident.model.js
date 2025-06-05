const mongoose = require("mongoose");

const residentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String, 
    required: false,
  },
  linkedIn: {
    type: String,
    required: false,
  },
  twitter: {
    type: String,
    required: false,
  },
});
const resident = mongoose.model("Resident", residentSchema);

module.exports = resident;
