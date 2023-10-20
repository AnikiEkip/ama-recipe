const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'ama-recipe-password',
  database: 'ama_recipe',
  connectionLimit: 5,
});

export { pool };