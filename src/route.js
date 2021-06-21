const express = require("express");
const routes = express.Router();
const userController = require("./controllers/usersController");

routes.get("/Users", userController.index);
module.exports = routes;
