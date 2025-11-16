const express = require("express");
const path = require("path");
const app = express();

// Servir el documento index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Indicar puerto para iniciar el servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor si no estamos en ambiente de testing
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

module.exports = app;
