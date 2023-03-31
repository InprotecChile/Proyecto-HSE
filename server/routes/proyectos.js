const express = require("express");
const pool = require("../db.js");



const router = express.Router();

// middleware
router.use(express.json());

router.get("/proyectos", (req, res) => {
  // const resultado = await pool.query("SELECT NOW()");
  // console.log(resultado);
  res.send("ejecutado");
})

router.get("/proyectos/10", (req, res) => {
  res.send("Retornando un proyecto")
})

router.post("/proyectos", (req, res) => {
  res.send("Creando proyecto")
})

router.delete("/proyectos", (req, res) => {
  res.send("Eliminando proyecto")
})

router.put("/proyectos", (req, res) => {
  res.send("Actualizando proyecto")
})

module.exports = router;