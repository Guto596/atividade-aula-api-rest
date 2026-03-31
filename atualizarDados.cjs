async function getDataFromREST(){

    //fetch
    const response = await fetch("https:/api.restful-api.dev/objects");

    const vetDados = response.body;
    return vetDados;
}

// let dados =[];
// dados = getDataFromREST();

module.exports = {
    getDataFromREST: getDataFromREST
}