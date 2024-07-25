function verificarMes() {
    // valor do campo de entrada
    const numeroMes = parseInt(document.getElementById('mes').value);
    const resultado = document.getElementById('resultado');

    // Limpa mensagens anteriores
    resultado.textContent = '';

    // Verifica se o número é válido
    if (isNaN(numeroMes) || numeroMes < 1 || numeroMes > 12) {
        resultado.textContent = 'Número inválido. Por favor, insira um número de 1 a 12.';
        resultado.style.color = 'red';
        return;
    }

    // meses
    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    // mês correspondente
    resultado.textContent = `O mês correspondente ao número ${numeroMes} é o mês de ${meses[numeroMes - 1]}.`;
    resultado.style.color = 'green';

    // Limpa entrada
    document.getElementById('mes').value = '';
}