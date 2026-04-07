export function atualizarTabela() {
    const tabela = document.querySelector("#tabela");
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
}