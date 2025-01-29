const express = require('express');
const path = require('path');
const app = express();

// Middleware para manejar datos JSON y formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para procesar las operaciones matemáticas
app.post('/calcular', (req, res) => {
  const { a, b, operacion } = req.body;

  // Convertir los valores de entrada a números
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  let resulto;
  switch (operacion) {
    case 'sumar':
      resulto = numA + numB;
      break;
    case 'restar':
      resulto = numA - numB;
      break;
    case 'multiplicar':
      resulto = numA * numB;
      break;
    case 'dividir':
      if (numB === 0) {
        return res.send({ error: 'División por cero no permitida' });
      }
      resulto = numA / numB;
      break;
    default:
      return res.send({ error: 'Operación no válida' });
  }

  res.send({ resulto });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
