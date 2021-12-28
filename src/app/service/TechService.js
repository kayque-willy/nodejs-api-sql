const UserRepository = require("../repository/UserRepository");
const TechRepository = require("../repository/TechRepository");

class TechService {

    async save(user_id, tech_name, res) {
        const user = await UserRepository.findByPk(user_id);
        if (!user)
            return res.status(400).send('Usuário não econtrado');
        return TechRepository.save(tech_name, user, res);
    }

    async getTechs(user_id, res) {
        return TechRepository.getTechs(user_id, res);
    }

    async delete(tech_name, user_id, res) {
        const user = await UserRepository.findByPk(user_id);
        if (!user)
            return res.status(400).send('Usuário não econtrado');
        return TechRepository.delete(tech_name, user, res);
    }
}

module.exports = new TechService();