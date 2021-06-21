const express = require("express");
const routes = require("./route");
const app = express();

app.use(express.json());
app.use(routes);

app.use((error, req, res, next) => {
  const nfError = new Error("Not Found");
  nfError.status = 404;
  next(nfError);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

app.listen(3333, () => console.log("Servidor rodando!"));
