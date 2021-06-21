const express = require("express");
const routes = express.Router();
const userController = require("./controllers/usersController");

routes.get("/Users", userController.index);
routes.post("/Users", userController.create);
routes.put("/Users/:id", userController.update);
routes.delete("/Users/:id", userController.delete);
module.exports = routes;
