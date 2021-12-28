const UserRepository = require("../repository/UserRepository");

class UserService {

    async save(data, res) {
        return UserRepository.save(data, res);
    }

    async update(user_id, data, res) {
        return UserRepository.update(user_id, data, res);
    }

    async list(req, res) {
        return UserRepository.list(req, res);
    }

    async getById(user_id, res) {
        return UserRepository.getById(user_id, res);
    }

    async delete(user_id, res) {
        return UserRepository.delete(user_id, res);
    }

}

module.exports = new UserService();