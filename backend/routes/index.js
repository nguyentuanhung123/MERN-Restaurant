const express = require('express');

const router = express.Router();

// user
const testUser = require('../controller/user/testUser.js');
const userSignUpController = require('../controller/user/userSignUp.js');
const userSignInController = require('../controller/user/userSignIn.js');

// product
const uploadProductController = require('../controller/product/uploadProduct.js');

// user section
router.get("/test", testUser)
router.post("/signup", userSignUpController)
router.post("/signin", userSignInController)

// product section
router.post("/uploadProduct", uploadProductController)

module.exports = router;