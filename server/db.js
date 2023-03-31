const Pool = require("pg").Pool;


const pool = new Pool({
    user: "postgres",
    password: "HSE123",
    host: "localhost",
    port: 5432,
    database: "HSE1"
});

pool.query("SELECT NOW()", (err, res) => {
    if (err) {
      console.error("Error al conectar a la base de datos", err);
    } else {
      console.log("Conexión a la base de datos exitosa");
      console.log("Resultado de la consulta:", res.rows);
    }
  });

module.exports= pool;

// const Pool = require("pg").Pool;
// const readline = require("readline-sync");

// // Pedir contraseña al usuario
// const contrasena = readline.question("Introduce tu Contrasena para la Base de datos: ", {
//     hideEchoBack: true
// });

// const pool = new Pool({
//     user: "postgres",
//     password: contrasena,
//     host: "localhost",
//     port: 5432,
//     database: "HSE1"
// });

// pool.query("SELECT NOW()", (err, res) => {
//     if (err) {
//       console.error("Error al conectar a la base de datos", err);
//     } else {
//       console.log("Conexión a la base de datos exitosa");
//       console.log("Resultado de la consulta:", res.rows);
//     }
// });

// module.exports = pool;