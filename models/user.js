const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: [true, 'Please enter Firstname'],
  },
  LastName: {
    type: String,
    required: [true, 'Please enter LastName'],
  },
  email: {
    type: String,
    required: [true, 'Please enter email'],
  },
  password: {
    type: String,
    required: [true, 'Please enter password'],
  },
  gender: {
    type: String,
    required: [true, 'Please enter gender'],
  },
  height: {
    type: String,
    required: [true, 'Please enter height'],
  },
  weight: {
    type: String,
    required: [true, 'Please enter email'],
  },
},{
    timestamps:true
});
userSchema.pre('save', async function (next) {
    const salt = await bycrypt.genSalt(10);
    this.password = await bycrypt.hash(this.password, salt);
    next();
  });
  userSchema.methods.checkPassword = async function (password) {
    const isMatch = await bycrypt.compare(password, this.password);
    return isMatch;
  };
  userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
      { _id: this._id, role: 'user', name: this.name },
      process.env.JWT_KEY,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );
    return token;
  };
module.exports = mongoose.model('User', userSchema);
