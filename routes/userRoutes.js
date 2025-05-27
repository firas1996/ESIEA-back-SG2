const express = require("express");
const { createUser, getAllUsers } = require("../controllers/userController");
const router = express.Router();

router.route("/").post(createUser);
router.route("/").get(getAllUsers);

module.exports = router;
