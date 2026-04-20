const User = require("../models/user.model");

// @desc Create user
exports.createUser = async (req, res) => {
  const { name, email } = req.body;

  const user = await User.create({ name, email });

  res.status(201).json(user);
};

// @desc Get all users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};