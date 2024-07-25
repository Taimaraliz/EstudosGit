function verificarIdade() {
    // Obtém o valor do campo de entrada
    const idade = parseInt(document.getElementById('idade').value);
    const mensagemErro = document.getElementById('mensagemErro');

    // Limpa mensagens de erro anteriores
    mensagemErro.textContent = '';

    // Verifica se a idade é um número válido
    if (isNaN(idade) || idade < 0) {
        mensagemErro.textContent = 'Por favor, insira uma idade válida.';
        return;
    }

    // Verifica se o usuário é menor de idade
    if (idade < 18) {
        alert('Você é menor de idade.');
    } else {
        alert('Você não é menor de idade.');
    }

    // Limpa o campo de entrada
    document.getElementById('idade').value = '';
}