document.querySelector("#btnListar").addEventListener("click", listarItens);
document.querySelector("#btnBuscar").addEventListener("click", buscarItem);
document.querySelector("#btnCadastrar").addEventListener("click", cadastrarItem);
document.querySelector("#btnAtualizar").addEventListener("click", atualizarItem);
//document.querySelector("#btnExcluir").addEventListener("click", excluirItem);

async function listarItens() {
    console.log("listaritens");
    const response = await fetch("/");
    if(response.ok){
        console.log('Itens buscados');
        console.log( JSON.stringify(response.body) );
    }else{
        log("erro: " + response.status);
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