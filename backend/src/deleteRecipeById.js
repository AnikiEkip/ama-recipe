const mariadb = require('mariadb');
import pool from './connexion.js'

async function deleteRecipeById(id, res) {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('DELETE FROM recipes WHERE recipe_id =?', [id]);
    return res.json(rows);
  } catch (err) {
    console.error('Error: ', err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (conn) conn.release();
  }
}

module.exports = {
    deleteRecipeById
};