export async function listarItens() {
    console.log("listaritens");
    const response = await fetch("/objetos");
    if(response.ok) {

        console.log('Itens listados');
        const itensListados = await response.json();
        console.log(itensListados);

        // reiniciarTabela();
        document.querySelector("#tabela");
        tabela.innerHTML = `
            <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Cor</th>
                <th>Capacidade</th>
                <th>Preço</th>
            </tr>
            </thead>
            <tbody id="corpoTabela">
            <!-- As linhas serão criadas pelo JavaScript -->
            </tbody>
        `;

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