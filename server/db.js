const Pool = require("pg").Pool;


const pool = new Pool({
    user: "AdminHSE",
    password: "HSE1234",
    host: "localhost",
    port: 5432,
    database: "HSE1"
});

module.exports= pool;