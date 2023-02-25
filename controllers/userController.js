const asyncHandler = require("express-async-handler");

//@desc Register a user
//@route POST /api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register the User" });
});

//@desc Login a user
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Login the User" });
});

//@desc Register a user
//@route POST /api/users/register
//@access Public
const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Current User" });
});
module.exports = { registerUser, loginUser, currentUser };
