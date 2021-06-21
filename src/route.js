const express = require("express");
const routes = express.Router();
const userController = require("./controllers/usersController");
const projectsController = require("./controllers/projectsController");

routes
  // user routes
  .get("/Users", userController.index)
  .post("/Users", userController.create)
  .put("/Users/:id", userController.update)
  .delete("/Users/:id", userController.delete)

  // projects routes
  .get("/Projects", projectsController.index)
  .post("/Projects", projectsController.create);

module.exports = routes;
