document.querySelector("#btnListar").addEventListener("click", listarItens);
document.querySelector("#btnBuscar").addEventListener("click", buscarItem);
document.querySelector("#btnCadastrar").addEventListener("click", cadastrarItem);
document.querySelector("#btnAtualizar").addEventListener("click", atualizarItem);
//document.querySelector("#btnExcluir").addEventListener("click", excluirItem);

async function listarItens() {
    console.log("listaritens");
    const response = await fetch("/objetos");
    if(response.ok) {

        console.log('Itens listados');
        const itensListados = await response.json();
        console.log(itensListados);

        const tabela = document.querySelector("#tabela");

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
    console.log("buscaritens");
    idItem = document.querySelector("#campoId").value;
    const response = await fetch(`/objetos/${idItem}`);
    if (response.ok) {
        console.log('Item buscado');
    } else {
        console.log(response.status);
    }
}

async function cadastrarItem() {
    console.log("cadastraritem");
    const response = await fetch("/objetos/cadastrar", {
        method: "POST",
        headers: "application/json",
        //body:
    });
    if (response.ok) {
        console.log('Item cadastrado');
    } else {
        console.log(response.status);
    }
}

async function atualizarItem() {
    console.log("atualizaritem")
}