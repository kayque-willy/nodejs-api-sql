const UserService = require("../service/UserService");

class UserController {

    index(req, res) {
        return res.status(200).send("<h1>Exemplo de API Rest SQL</h1><span>NodeJS, Express.js, Sequelize e PostgreSQL</span>"
        + "<hr><table> <thead> <tr> <th>ROTA</th> <th>HTTP(Verbo)</th> <th>Request</th> <th>Return</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>/api-sql/</td> <td>GET</td> <td>-</td> <td>HTML</td> <td>API index</td> </tr> <tr> <td>/api-sql/user</td> <td>GET</td> <td>-</td> <td>JSON</td> <td>List users</td> </tr> <tr> <td>/api-sql/user</td> <td>POST</td> <td>JSON</td> <td>JSON</td> <td>Create user</td> </tr> <tr> <td>/api-sql/user/:id</td> <td>GET</td> <td>int(id)</td> <td>JSON</td> <td>Get user by id</td> </tr> <tr> <td>/api-sql/user/:id</td> <td>PUT</td> <td>JSON, int(id)</td> <td>JSON</td> <td>Save user by id</td> </tr> <tr> <td>/api-sql/user/:id</td> <td>DELETE</td> <td>int(id)</td> <td>boolean</td> <td>Delete user by id</td> </tr> <tr> <td>/api-sql/user/:user_id/addresses</td> <td>POST</td> <td>JSON, int(id)</td> <td>JSON</td> <td>Create user address by user id</td> </tr> <tr> <td>/api-sql/user/:user_id/addresses</td> <td>GET</td> <td>int(id)</td> <td>JSON</td> <td>Get user and address by user id</td> </tr> <tr> <td>/api-sql/user/:user_id/techs</td> <td>POST</td> <td>JSON</td> <td>JSON</td> <td>Create techs by user id</td> </tr> <tr> <td>/api-sql/user/:user_id/techs</td> <td>GET</td> <td>int(id)</td> <td>JSON</td> <td>Get user and techs by user id</td> </tr> <tr> <td>/api-sql/user/:user_id/techs</td> <td>DELETE</td> <td>int(id)</td> <td>boolean</td> <td>Delete techs user by id</td> </tr> </tbody> </table>")
    }

    async save(req, res) {
        const data = { ...req.body };
        return UserService.save(data, res);
    }

    async update(req, res) {
        const user_id = req.params.id;
        const data = { ...req.body };
        return UserService.update(user_id, data, res);
    }

    async list(req, res) {
        return UserService.list(req, res);
    }

    async getById(req, res) {
        const user_id = req.params.id;
        return UserService.getById(user_id, res);
    }

    async delete(req, res) {
        const user_id = req.params.id;
        return UserService.delete(user_id, res);
    }

}

module.exports = new UserController();