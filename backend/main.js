const getAllRecipe = require('./src/getAllRecipe');
const editRecipeById = require('./src/editRecipeById');
const deleteRecipeById = require('./src/deleteRecipeById');
const getRecipeById = require('./src/getRecipeById');
const postRecipe = require('./src/postRecipe');
const express = require('express');
const mariadb = require('mariadb');

const port = 3000;

const app = express();

app.get('/api/recipes', async (req, res) => {
  return getAllRecipe.getAllRecipe(res);
});

app.post('/api/recipes', (req, res) => {
  let recipe = req.body;
  return postRecipe.postRecipe(recipe, res);
});

app.get('/api/recipes/:id', (req, res) => {
  let id = req.params.id;
  return getRecipeById.getRecipeById(id, res);
});

app.put('/api/recipes/:id', (req, res) => {
  let id = req.params.id;
  let modification = req.body;
  return editRecipeById.editRecipeById(id, modification, res);
});

app.delete('/api/recipes/:id', (req, res) => {
  let id = req.params.id;
  return deleteRecipeById.deleteRecipeById(id, res);
});

app.listen(port, () =>
  console.log(`Listening on port ${port}!`),
);