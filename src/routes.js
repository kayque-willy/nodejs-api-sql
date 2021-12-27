const Router = require("express");
const UserController = require("./app/controller/UserController");
const AddressController = require("./app/controller/AddressController");
const TechController = require("./app/controller/TechController");

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

// --------------- Rotas Techs ---------------
routes.get('/user/:user_id/techs', TechController.getTechs);
routes.post('/user/:user_id/techs', TechController.save);
routes.delete('/user/:user_id/techs', TechController.delete);


module.exports = routes;