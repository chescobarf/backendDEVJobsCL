const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  database: "dev_jobs",
  user: "test",
  password: "test123456",
});

let devJobsDB = {};

devJobsDB.allOfertas = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM ofertas", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

devJobsDB.OfertaById = (id) => {
  return new Promise((resolve, reject) => {
    //pasamos el ? para preguntar si es lo mismo al id entregado, asi evitamo SQL Inyection
    pool.query("SELECT * FROM ofertas WHERE id=?", [id], (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results[0]);
    });
  });
};

devJobsDB.getAllTecnologias = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM tecnologias", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

module.exports = devJobsDB;
