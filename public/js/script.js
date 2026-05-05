import { reiniciarTabela } from "./reiniciarTabela.js";
import { listarItens } from "./atualizarTabela.js";


document.querySelector("#btnListar").addEventListener("click", listarItens);
document.querySelector("#btnBuscar").addEventListener("click", buscarItem);
document.querySelector("#btnCadastrar").addEventListener("click", cadastrarItem);
document.querySelector("#btnAtualizar").addEventListener("click", atualizarItem);
document.querySelector("#btnExcluir").addEventListener("click", excluirItem);



async function buscarItem() {
    
    const idDispositivo = document.querySelector("#campoId").value;

    reiniciarTabela();

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

    const idDispositivo = document.querySelector("#campoId").value;
    const nome = document.querySelector("#campoNome").value;
    const cor = document.querySelector("#campoCor").value;
    const capacidade = document.querySelector("#campoCapacidade").value;
    const preco = document.querySelector("#campoPreco").value;

    if (!idDispositivo || !nome || !cor || !capacidade || !preco) {
        alert("Preencha todos os campos antes de cadastrar.");
        return;
    }

    const objetoDispositivo = {
        id: idDispositivo,
        name: nome,
        data: {
            color: cor,
            capacity: capacidade,
            price: preco
        }
    };
    
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
        reiniciarTabela();
        await listarItens();

    } else {
        console.log(response.status);
    }


}

async function atualizarItem() {
    
}

async function excluirItem() {
    const idDispositivo = document.querySelector("#campoId").value;

    const response = await fetch(`/objetos/excluir/${idDispositivo}`, {
        method: "DELETE"
    });
    if (response.ok) {
        console.log(response.status);
        reiniciarTabela();
    }
}