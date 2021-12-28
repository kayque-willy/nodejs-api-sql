const User = require("../models").User;

class UserRepository {

    async save(data, res) {
        const user = await User.create(data);
        return res.status(200).json(user);
    }

    async update(user_id, data, res) {
        const user = await User.update(data,{ where: { id: user_id } });
        return res.status(200).json(user);
    }

    async list(req, res) {
        const users = await User.findAll();
        return res.status(200).json(users);
    }

    async getById(user_id, res) {
        const user = await User.findByPk(user_id);
        return res.status(200).json(user);
    }

    async delete(user_id, res) {
        const user = await User.destroy({ where: { id: user_id } });
        return res.status(200).json(user);
    }

    async findByPk(user_id) {
        return User.findByPk(user_id);
    }

}

module.exports = new UserRepository();