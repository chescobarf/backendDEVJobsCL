const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    let result = await db.all();
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let result = await db.one(req.params.id);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//exportamos la variable para ser utilizada
module.exports = router;
