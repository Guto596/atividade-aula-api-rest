import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { getDataFromREST } from "./atualizarDados.cjs"
const app = express();

app.use(express.static('public'));
app.use(express.json());

// Replicando o __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let dados = [];

app.get("/", async (req, res) => {
    dados = [];
    let responseData = await getDataFromREST();
    dados = responseData;
    //console.log("dados recebidos:", JSON.stringify(responseData));
        
    res.sendFile(join(__dirname, "public/static/index.html"));
});

app.get("/objetos", (req, res) => {
   res.send(dados);
});

app.get("/objetos/:id", (req, res) => {
    const idDisp = req.params.id;

    const dispProcurado = dados.find(disp => disp.id == idDisp);

    res.send(dispProcurado);
});

app.post("/objetos/cadastrar", (req, res) => {
    const novoDispositivo = req.body;

    console.log(novoDispositivo);

    dados.push(novoDispositivo);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

//faz a importacao dos dados