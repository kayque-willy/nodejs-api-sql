const Router = require("express");
const UserController = require("./app/controller/UserController");

const routes = new Router();

// --------------- Rotas Usuários ---------------
routes.get("/", UserController.index);
routes.post("/user", UserController.save);
routes.get("/user", UserController.list);
routes.get("/user/:id", UserController.getById);
routes.put("/user/:id", UserController.update);
routes.delete("/user/:id", UserController.delete);

module.exports = routes;