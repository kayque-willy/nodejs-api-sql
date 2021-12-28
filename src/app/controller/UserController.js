const UserService = require("../service/UserService");

class UserController {

    index(req, res) {
        return res.status(200).send("<h1>Exemplo de API Rest SQL</h1><span>NodeJS, Express.js, Sequelize e PostgreSQL</span>")
    }

    async save(req, res) {
        const data = { ...req.body };
        return UserService.save(data, res);
    }

    async update(req, res) {
        const user_id = req.params.id;
        const data = { ...req.body };
        return UserService.update(user_id, data, res);
    }

    async list(req, res) {
        return UserService.list(req, res);
    }

    async getById(req, res) {
        const user_id = req.params.id;
        return UserService.getById(user_id, res);
    }

    async delete(req, res) {
        const user_id = req.params.id;
        return UserService.delete(user_id, res);
    }

}

module.exports = new UserController();