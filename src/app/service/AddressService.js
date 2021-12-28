const AddressRepository = require("../repository/AddressRepository");
const UserRepository = require("../repository/UserRepository");

class AddressService {

    async save(data, user_id, res) {
        if (user_id != data.user_id)
            return res.status(400).send('Os identificadores do usuário e endereço são diferentes.');
        const user = await UserRepository.findByPk(user_id);
        if (!user)
            return res.status(400).send('Usuário não encontrado.');
        return AddressRepository.save(data, res)
    }

    async getAddressByUserId(user_id, res) {
        return AddressRepository.getAddressByUserId(user_id, res);
    }
}

module.exports = new AddressService();