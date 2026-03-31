import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { getDataFromREST } from "./atualizarDados.cjs"
const app = express();

app.use(express.static('public'));

// Replicando o __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let dados = [];

app.get("/", (req, res) => {
    dados = [];
    let responseData = getDataFromREST();
    console.log(JSON.stringify(responseData));
        
    res.sendFile(join(__dirname, "public/static/index.html"));
});

app.get("/objetos", (req, res) => {
   res.send(dados);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

//faz a importacao dos dados