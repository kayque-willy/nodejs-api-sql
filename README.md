# Exemplo de API RESTFUL - SQL

Exemplo de API RESTFUL com uso do Node.js, Express.js, Sequelize ORM e PostgreSQL.

## Development server

Navigate to `http://localhost:8080/api-sql/`. The app will automatically reload if you change any of the source files.

## API REQUESTS: 

ROTA                                |     HTTP(Verbo)   |    Request    |    Return   |    Description                  |
----------------------------------- | ----------------- | ------------- | ----------- | ------------------------------- |
/api-sql/                           |       GET         |      -        |     HTML    | API index                       |
/api-sql/user                       |       GET         |      -        |     JSON    | List users                      |
/api-sql/user                       |       POST        |     JSON      |     JSON    | Create user                     |
/api-sql/user/:id                   |       GET         |    int(id)    |     JSON    | Get user by id                  |
/api-sql/user/:id                   |       PUT         | JSON, int(id) |     JSON    | Save user by id                 |
/api-sql/user/:id                   |       DELETE      |   int(id)     |    boolean  | Delete user by id               |
/api-sql/user/:user_id/addresses    |       POST        | JSON, int(id) |     JSON    | Create user address by user id  |
/api-sql/user/:user_id/addresses    |       GET         |    int(id)    |     JSON    | Get user and address by user id |
/api-sql/user/:user_id/techs        |       POST        |     JSON      |     JSON    | Create techs by user id         |
/api-sql/user/:user_id/techs        |       GET         |    int(id)    |     JSON    | Get user and techs by user id   |
/api-sql/user/:user_id/techs        |       DELETE      |    int(id)    |    boolean  | Delete techs user by id         |
