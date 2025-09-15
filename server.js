const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Rota simples
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
