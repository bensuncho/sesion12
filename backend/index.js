const express = require("express");
const cors = require("cors");
const { application } = require("express");
const app = express();

const puerto = 4000;
const nombredelservidor = "127.0.0.1";
app.use(express.json());
app.use(cors());

const frutas = [
  {
    id: 1,
    nombre: "manzana",
  },
  {
    id: 2,
    nombre: "peras",
  },
  {
    id: 3,
    nombre: "Banana",
  },
  {
    id: 4,
    nombre: " Papaya",
  },
];
app.get("/create", (req, res) => {
  res.send("create register...");
});

app.get("/", (req, res) => {
  res.json(frutas);
});
app.get("/update", (req, res) => {
  res.send("update register..");
});

app.get("/delete", (req, res) => {
  res.send("delete register...");
});

app.listen(puerto, nombredelservidor, () => {
  console.log(`Servidor escuchando en http://${nombredelservidor}:${puerto}"/`);
});
