// Confirmar se uma senha está identica para fazer a validação.
function ConfirmPass() {
    const senha1 = document.getElementById('senha').value;
    const senha2 = document.getElementById('confirmPass').value;

    if(senha1 === senha2){
        return true;
    }else{
        alert("As senhas não coincidem");
        return false;
    }
}

export function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function senhasIguais(s1, s2) {
    return s1 === s2;
}

export function tamanhoSenha(senha, tamanho = 10) {
    return senha.length === tamanho;
}
