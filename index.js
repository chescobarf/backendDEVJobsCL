var mysql = require("mysql");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "test123456",
  database: "dev_jobs",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// con.connect(function (err) {
//   if (err) throw err;
//   con.query("SELECT * FROM ofertas", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

var selectAllOfertas = (err) => {
  if (err) throw err;
  con.query("SELECT * FROM ofertas", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    return result;
  });
};

app.get("/", function (req, res) {
  res.status(200).json({
    ok: true,
    Listado: selectAllOfertas(),
  });
});

app.listen(3000, () => {
  console.log("Escuchando puerto 3000");
});
