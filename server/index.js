const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

// Routes
const routeProyectos = require("./routes/proyectos");
app.use("/routes/proyectos", routeProyectos);



app.get("/", (req, res) => {
    res.send("index");
})

const PUERTO = process.env.PORT || 5000

app.listen(PUERTO, () =>{
    console.log(`servidor iniciado en el puerto ${PUERTO}...`);
});

