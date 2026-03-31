import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { getDataFromREST } from "./atualizarDados.js"
const app = express();

app.use(express.static('public'));

// Replicando o __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let dados = [];

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "public/static/index.html"));
    dados = [];
    dados = [getDataFromREST()];
});

app.get("/objetos", (req, res) => {
   res.send()
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

//faz a importacao dos dados