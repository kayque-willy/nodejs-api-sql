const User = require("../models").User;
const Address = require("../models").Address;

class AddressController {

    async save(req, res) {
        const { user_id } = req.params;
        const data = { ...req.body };
        if (user_id != data.user_id)
            return res.status(400).send('Os identificadores do usuário e endereço são diferentes.');

        const user = await User.findByPk(user_id);
        if (!user)
            return res.status(400).send('Usuário não encontrado.');

        const address = await Address.create(data);
        return res.status(200).json(address);
    }

    async getAddressByUserId(req, res) {
        const { user_id } = req.params;
        
        const user = await User.findByPk(user_id, {
            include: { association: 'addresses' }
        });

        // Retorna somente os endereços
        // return res.status(200).json(user.addresses);
        // Retorna o usuário e os endereços
        return res.status(200).json(user);
    }
}

module.exports = new AddressController();