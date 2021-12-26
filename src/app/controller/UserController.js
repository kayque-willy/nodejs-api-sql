const User = require("../models").User;

class UserController {

    index(req, res){
        return res.status(200).send("<h1>Exemplo de API Rest SQL</h1><span>NodeJS, Express.js, Sequelize e PostgreSQL</span>")
    }
    
    async save(req, res) {
        const data = {...req.body};
        const user = await User.create(data);
        return res.status(200).json(user);
    }

    async list(req, res) {
        const users = await User.findAll();
        return res.status(200).json(users);
    }

}

module.exports = new UserController();