const User = require("../models").User;
const Tech = require("../models").Techs;

class TechController {

    async save(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;
        const user = await User.findByPk(user_id);

        if (!user)
            return res.status(400).send('Usuário não econtrado');

        const [tech] = await Tech.findOrCreate({
            where: { name }
        });

        await user.addTech(tech);
        return res.status(200).json(tech);
    }


    async getTechs(req, res) {
        const { user_id } = req.params;
        const user = await User.findByPk(user_id, {
            include: {
                association: 'techs',
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        });
        // Retorna somente as tecnologias do usuário
        // return res.status(200).json(user.techs);
        // Retorna o usuário e as tecnologias
        return res.status(200).json(user);
    }

    async delete(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;
        const user = await User.findByPk(user_id);

        if (!user)
            return res.status(400).send('Usuário não econtrado');

        const tech = await Tech.findOne({
            where: { name }
        });
        // Remove o relacionamento
        await user.removeTech(tech);
        // Se necessário, remove também a tecnologia
        // await tech.destroy();
        return res.status(200).send('Tecnologia do usuário removida com sucesso!');
    }
}

module.exports = new TechController();