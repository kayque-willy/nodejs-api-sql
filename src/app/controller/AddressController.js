const AddressService = require("../service/AddressService");

class AddressController {

    async save(req, res) {
        const { user_id } = req.params;
        const data = { ...req.body };
        return AddressService.save(data, user_id, res);
    }

    async getAddressByUserId(req, res) {
        const { user_id } = req.params;
        return AddressService.getAddressByUserId(user_id, res);
    }
}

module.exports = new AddressController();