const TechService = require("../service/TechService");

class TechController {

    async save(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;
        return TechService.save(user_id, name, res);
    }

    async getTechs(req, res) {
        const { user_id } = req.params;
        return TechService.getTechs(user_id, res);
    }

    async delete(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;
        return TechService.delete(name, user_id, res);
    }
}

module.exports = new TechController();