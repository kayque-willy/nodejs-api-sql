const User = require("../models").User;
const Address = require("../models").Address;

class AddressRepository {

    async save(data, res) {
        const address = await Address.create(data);
        return res.status(200).json(address);
    }

    async getAddressByUserId(user_id, res) {
        const user = await User.findByPk(user_id, {
            include: { association: 'addresses' }
        });
        // Retorna somente os endereços
        // return res.status(200).json(user.addresses);
        // Retorna o usuário e os endereços
        return res.status(200).json(user);
    }
}

module.exports = new AddressRepository();