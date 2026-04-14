import { atualizarTabela } from "./atualizarTabela.js";

document.querySelector("#btnListar").addEventListener("click", listarItens);
document.querySelector("#btnBuscar").addEventListener("click", buscarItem);
document.querySelector("#btnCadastrar").addEventListener("click", cadastrarItem);
document.querySelector("#btnAtualizar").addEventListener("click", atualizarItem);
document.querySelector("#btnExcluir").addEventListener("click", excluirItem);

async function listarItens() {
    console.log("listaritens");
    const response = await fetch("/objetos");
    if(response.ok) {

        console.log('Itens listados');
        const itensListados = await response.json();
        console.log(itensListados);

        atualizarTabela();

        itensListados.forEach((item) => {
            const linha = document.createElement("tr");
            
            linha.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.data.color}</td>
                <td>${item.data.capacity}</td>
                <td>${item.data.price}<td>
            `

            tabela.appendChild(linha);
        });

        
    }else{
        console.log("erro: " + response.status);
    }
}

async function buscarItem() {
    
    const idDispositivo = document.querySelector("#campoId").value;

    atualizarTabela();

    const response = await fetch(`/objetos/${idDispositivo}`);
    if (response.ok) {
        console.log('Item buscado');
        const dispProcurado = await response.json();
        
        const linha = document.createElement("tr");
            
        linha.innerHTML = `
            <td>${dispProcurado.id}</td>
            <td>${dispProcurado.name}</td>
            <td>${dispProcurado.data.color}</td>
            <td>${dispProcurado.data.capacity}</td>
            <td>${dispProcurado.data.price}<td>
        `
        tabela.appendChild(linha);

    } else {
        console.log(response.status);
    }
}

async function cadastrarItem() {
    console.log("cadastraritem");
    const idDispositivo = document.querySelector("#campoId").value;
    const nome = document.querySelector("#campoNome").value;
    const cor = document.querySelector("#campoCor").value;
    const capacidade = document.querySelector("#campoCapacidade").value;
    const preco = document.querySelector("#campoPreco").value;

    const objetoDispositivo = {
        id: idDispositivo,
        name: nome,
        data: {
            color: cor,
            capacity: capacidade,
            price: preco
        }
    }
    console.log(objetoDispositivo);

    const response = await fetch("/objetos/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objetoDispositivo)
    });
    if (response.ok) {

        console.log('Item cadastrado');
        alert("Dispositivo cadastrado!");

    } else {
        console.log(response.status);
    }
}

async function atualizarItem() {
    console.log("atualizaritem");
}

async function excluirItem() {
    const idDispositivo = document.querySelector("#campoId").value;

    const response = await fetch(`/objetos/excluir/${idDispositivo}`, {
        method: "DELETE"
    });
    if (response.ok) {
        console.log(response.status);
    }
}