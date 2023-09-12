const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "Please provide an Name!"],
    unique: false,
  },
  companyEmail: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
  role: {
    type: String,
    required: [true, "Please define user role!"],
    unique: false,
  },
  companyAdmins: [
    {
      name: String,
      email: String,
      password: String,
      role: String,
    }
  ],
});

// create coffee Users table or collection if there is no table with that name already
module.exports = mongoose.model.ohms || mongoose.model("Ohms", UserSchema);
