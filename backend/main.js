const express = require('express');
const port = 3000;

const app = express();

app.get('/api/recipes', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/api/recipes', (req, res) => {
  return res.send('Received a POST HTTP method');
});

app.get('/api/recipes/:id', (req, res) => {
    return res.send('Received a GET HTTP method');
  });

app.put('/api/recipes/:id', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete('/api/recipes/:id', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

app.listen(port, () =>
  console.log(`Listening on port ${port}!`),
);