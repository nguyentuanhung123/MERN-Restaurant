const express = require('express');

const router = express.Router();

const testUser = require('../controller/user/testUser.js');
const userSignUpController = require('../controller/user/userSignUp.js');
const userSignInController = require('../controller/user/userSignIn.js');

router.get("/test", testUser)
router.post("/signup", userSignUpController)
router.post("/signin", userSignInController)

module.exports = router;