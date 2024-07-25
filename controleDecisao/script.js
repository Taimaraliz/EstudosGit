function calcularMedia() {
    // Obter valores de entrada
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const numero3 = parseFloat(document.getElementById('numero3').value);

    // Verifica números válidos
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        document.getElementById('resultado').innerText = 'Por favor, insira três números válidos.';
        return;
    }

    const media = (numero1 + numero2 + numero3) / 3;

    document.getElementById('resultado').innerText = `A média é: ${media.toFixed(2)}`;
}