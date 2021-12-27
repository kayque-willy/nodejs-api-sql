const Router = require("express");
const AddressController = require("./app/controller/AddressController");
const UserController = require("./app/controller/UserController");

const routes = new Router();

// --------------- Rotas Usuários ---------------
routes.get("/", UserController.index);
routes.post("/user", UserController.save);
routes.get("/user", UserController.list);
routes.get("/user/:id", UserController.getById);
routes.put("/user/:id", UserController.update);
routes.delete("/user/:id", UserController.delete);

// --------------- Rotas Endereço ---------------
routes.post('/user/:user_id/addresses', AddressController.save);
routes.get('/user/:user_id/addresses', AddressController.getAddressByUserId);


module.exports = routes;