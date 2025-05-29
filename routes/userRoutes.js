const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  signUp,
} = require("../controllers/userController");
const router = express.Router();

router.route("/signup").post(signUp);

router.route("/").post(createUser);
router.route("/").get(getAllUsers);
router.route("/:id").get(getUserById).patch(updateUser).delete(deleteUser);

module.exports = router;
