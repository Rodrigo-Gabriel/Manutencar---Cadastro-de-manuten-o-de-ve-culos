// Função para mostrar a senha pelo olho.
function mostrarSenha() {
     inputPass = document.getElementById('senha');
    let btnShowPass = document.getElementById('btn-senha');

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    }else {
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
}
let
// Função para mostrar a senha pelo olho.
function mostrarConfirmSenha() {
    let inputPass = document.getElementById('confirmPass');
    let btnShowPass = document.getElementById('btn-confirm-senha');

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    }else {
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
}

// Confirmar se uma senha está identica para fazer a validação.
function ConfirmPass() {
    const senha1 = document.getElementById('senha').value;
    const senha2 = document.getElementById('confirmPass').value;

    if(senha1 !== senha2 || senha1 === "" || senha2 === ""){
        alert("As senhas não coincidem ou estão vazias!");
        return false;
    }else{
        return true;
    }
}

// Validação de formulário.
function enviar(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Validar nome
    if (nome === "") {
        alert("Digite o seu nome!");
        return false;
    }

    // validar email
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
        alert("Digite um email válido!");
        return;
    }

    // Validar senhas iguais
    if (!ConfirmPass()) {
        return;
    }

  // Salvar dados no localStorage (A fins de testes)
  localStorage.setItem('btnSignIn', 'Clicado pivete');
  localStorage.setItem('nome', nome.value);

  // Mostrar no console
  console.log('Botão:', localStorage.getItem('btnSignIn'));
  console.log('Nome salvo:', localStorage.getItem('nome')); 

  window.location.href = "../pages/initialScreen.html";  
}