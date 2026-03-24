import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

app.use(express.static('public'));

// Replicando o __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "pagina.html"));
});

