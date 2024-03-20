const express = require('express');
const app = express();
const port = 3000;

// Home route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/2.2.html');
});

// Add route
app.get('/add/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const sum = num1 + num2;
  res.send(`${sum}`);
});

// Server listening
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

