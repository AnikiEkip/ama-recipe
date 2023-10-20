const mariadb = require('mariadb');
import pool from './connexion.js'

async function getAllRecipe(res) {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM recipes');
    return res.json(rows);
  } catch (err) {
    console.error('Error: ', err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (conn) conn.release();
  }
}

module.exports = {
  getAllRecipe
};
