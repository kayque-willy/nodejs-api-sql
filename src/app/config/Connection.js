const Sequelize = require('sequelize');
const dbConfig = require('./database.config');

class Connection {

    constructor() {
        this.dbConnectPostGreSQL();
    }

    async dbConnectPostGreSQL() {
        try {
            this.connection = new Sequelize(dbConfig);
            await this.connection.authenticate();
            console.log('Conexão com o PostgreSQL foi realizada com sucesso.');
        } catch (error) {
            console.error('Não foi possível conectar ao PostgreSQL:', error);
        }
    }

}

module.exports = new Connection();