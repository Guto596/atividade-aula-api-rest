async function getDataFromREST() {

    //fetch
    const response = await fetch("https://api.restful-api.dev/objects");
    if (response.ok) {
        const vetDados = response.json();
        return vetDados;
    }
}

// let dados =[];
// dados = getDataFromREST();

module.exports = {
    getDataFromREST: getDataFromREST
}