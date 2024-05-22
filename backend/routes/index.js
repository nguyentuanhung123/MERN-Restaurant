const express = require('express');

const router = express.Router();

const userSignUpController = require('../controller/user/userSignUp.js');
const testUser = require('../controller/user/testUser.js');

router.get("/test", testUser)
router.post("/signup", userSignUpController)

module.exports = router;