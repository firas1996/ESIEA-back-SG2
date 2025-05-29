const User = require("../models/userModel");

exports.signUp = async (req, res) => {
  try {
    const { name, age, email, password, confirm_Password } = req.body;
    const newUser = await User.create({
      name,
      age,
      email,
      password,
      confirm_Password,
    });
    res.status(201).json({
      message: "User created !!!",
      data: { newUser },
    });
  } catch (error) {
    res.status(400).json({
      message: "fail!!!",
      error: error,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      message: "User created !!!",
      data: { newUser },
    });
  } catch (error) {
    res.status(400).json({
      message: "fail!!!",
      error: error,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "Users fetched !!!",
      data: { users },
    });
  } catch (error) {
    res.status(400).json({
      message: "fail!!!",
      error: error,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      message: "User fetched !!!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({
      message: "fail!!!",
      error: error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      message: "User updated !!!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({
      message: "fail!!!",
      error: error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      message: "User fetched !!!",
    });
  } catch (error) {
    res.status(400).json({
      message: "fail!!!",
      error: error,
    });
  }
};
