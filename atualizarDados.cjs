async function getDataFromREST() {

    //fetch
    const response = await fetch("https://api.restful-api.dev/objects");
    if (response.ok) {
        const vetDados = await response.json();

        vetDados.forEach(item => {
            item.data = {
                color: item.data?.color ?? "-----",
                capacity: item.data?.capacity ?? "-----",
                price: item.data?.price ?? "-----"
            };
            
        });
        return vetDados;
    }
}

// let dados =[];
// dados = getDataFromREST();

module.exports = {
    getDataFromREST: getDataFromREST
}