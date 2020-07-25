const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/getAllOfertas", async (req, res, next) => {
  try {
    let result = await db.allOfertas();
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/getOferta/:id", async (req, res, next) => {
  try {
    let result = await db.OfertaById(req.params.id);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/getAllTecnologias", async (req, res, next) => {
  try {
    let result = await db.getAllTecnologias();
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//exportamos la variable para ser utilizada
module.exports = router;
