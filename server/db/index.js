const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  database: "dev_jobs",
  user: "test",
  password: "test123456",
});

let devJobsDB = {};

devJobsDB.all = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM ofertas", (err, resuls) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

devJobsDB.one = (id) => {
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

module.exports = devJobsDB;
