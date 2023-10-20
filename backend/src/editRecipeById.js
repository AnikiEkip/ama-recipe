const mariadb = require('mariadb');
import pool from './connexion.js'

async function editRecipeById(id, modif ,res) {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('UPDATE recipes SET ? WHERE recipe_id = ?', [modif, id]);
    return res.json(rows);
  } catch (err) {
    console.error('Error: ', err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (conn) conn.release();
  }
}

module.exports = {
    editRecipeById,
};