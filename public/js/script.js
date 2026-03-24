document.querySelector("#btnListar").addEventListener("click", listarItens());

async function listarItens() {
    const response = await fetch("https://localhost:3000/objetos");
}