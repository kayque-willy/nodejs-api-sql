const User = require("../models").User;
const Tech = require("../models").Techs;

class TechRepository {

    async save(tech_name, user, res) {
        const [tech] = await Tech.findOrCreate({
            where: { name: tech_name }
        });
        await user.addTech(tech);
        return res.status(200).json(tech);
    }

    async getTechs(user_id, res) {
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

    async delete(tech_name, user, res) {
        const tech = await Tech.findOne({
            where: { name: tech_name }
        });
        // Remove o relacionamento
        await user.removeTech(tech);
        // Se necessário, remove também a tecnologia
        // await tech.destroy();
        return res.status(200).send('Tecnologia do usuário removida com sucesso!');
    }
}

module.exports = new TechRepository();