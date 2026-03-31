document.querySelector("#btnListar").addEventListener("click", listarItens);

async function listarItens() {
    console.log("listaritens")
    const response = await fetch("/objetos");
    if(response.ok){
        console.log('ok');
        console.log( JSON.stringify(response.body) );
    }else{
        log("erro: " + response.status);
    }
}
