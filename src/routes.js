const Router = require("express");
const UserController = require("./app/controller/UserController");

const routes = new Router();

// --------------- Rotas Usuários ---------------
routes.get("/", UserController.index);
routes.post("/user", UserController.save);
routes.get("/user", UserController.list);

module.exports = routes;