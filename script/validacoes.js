// Verificar data de manutenção para não ser antes ou muito depois da data que a pessoa escolheu
window.addEventListener("DOMContentLoaded", () => {
    const inputData = document.getElementById("data");

    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");
    const dia = String(hoje.getDate()).padStart(2, "0");

    inputData.value = `${ano}-${mes}-${dia}`;
});