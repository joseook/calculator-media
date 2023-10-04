function calcularMedia() {
    const av1 = parseFloat(document.getElementById('av1').value);
    const av2 = parseFloat(document.getElementById('av2').value);
    const av3 = parseFloat(document.getElementById('av3').value);
    const avt = parseFloat(document.getElementById('avt').value);

    if (isNaN(av1) || isNaN(av2) || isNaN(av3) || isNaN(avt)) {
        alert('Por favor, insira todas as notas corretamente.');
        return;
    }

    const media = ((av1 * 25) + (av2 * 25) + (av3 * 20) + (avt * 30)) / 100;
    document.getElementById('resultado').innerText = `Sua média é: ${media.toFixed(2)}`;
}

function limparCampos() {
    document.getElementById('av1').value = '';
    document.getElementById('av2').value = '';
    document.getElementById('av3').value = '';
    document.getElementById('avt').value = '';
    document.getElementById('resultado').innerText = '';
}
