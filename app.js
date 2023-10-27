const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola estudiantes de octavo')
});

app.listen(port, () => {
  console.log(`estoy funcionando por el puerto ${port}`)
});
