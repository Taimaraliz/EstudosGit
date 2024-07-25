function calcularMedia() {
    // valores entrada
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const numero3 = parseFloat(document.getElementById('numero3').value);
    const numero4 = parseFloat(document.getElementById('numero4').value);
    const numero5 = parseFloat(document.getElementById('numero5').value);

    const media = (numero1 + numero2 + numero3 + numero4 + numero5) / 5;

    document.getElementById('resultado').innerText = `A média aritmética é: ${media.toFixed(2)}`;
}
