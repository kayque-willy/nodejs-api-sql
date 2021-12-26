"use strict";

const app = require("./app");

var PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/api-sql/ listen on port: ${PORT}`);
});