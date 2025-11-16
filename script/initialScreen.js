document.addEventListener("DOMContentLoaded", () => {

    const btnCadastrar = document.getElementById("btnCadastrar");
    const tabela = document.getElementById("tabelaManutencoes");

    btnCadastrar.addEventListener("click", () => {

        const marca = document.getElementById('marca').value.trim();
        const placa = document.getElementById('placa').value.trim();
        const descricao = document.getElementById('descricao').value.trim();
        const data = document.getElementById('data').value.trim();

        // Validações simples
        if (!marca || placa === "" || descricao === "" || data === "") {
            alert("Os campos precisam estar preenchidos!");
            return;
        }

        // Criar uma nova linha na tabela
        const novaLinha = document.createElement("tr");

        novaLinha.innerHTML = `
            <td>${marca}</td>
            <td>${placa}</td>
            <td>${descricao}</td>
            <td>${formatarData(data)}</td>
             <td><input type="checkbox"></td>
        `;

        tabela.appendChild(novaLinha);

        // Limpar formulario
        limparFormulario();
    });
});

// Formata data de "2025-11-05" → "05/11/2025" padrão brasileiro!
    function formatarData(dataISO) {
        const partes = dataISO.split("-");
        return `${partes[2]}/${partes[1]}/${partes[0]}`;
    }

    // Limpa os campos
    function limparFormulario() {
        document.getElementById("marca").value = "";
        document.getElementById("placa").value = "";
        document.getElementById("descricao").value = "";
        document.getElementById("data").value = "";
    }