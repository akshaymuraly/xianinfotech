const Router = require("express").Router();
const { userSignin } = require("../controllers/user.conroller");

Router.post("/user-login", userSignin);

module.exports = Router;
