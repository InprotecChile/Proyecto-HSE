const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () =>{
    console.log("servidor iniciado en el puerto 5000");
});
