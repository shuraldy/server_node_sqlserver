const { poolPromise } = require('../dbconfig');

const getData = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT TOP 10 * FROM rpnis.pago_componente'); // Cambia `your_table` por el nombre de tu tabla
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getData
};
