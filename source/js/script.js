// Função para calcular a média
function calcularMedia() {
    // Obter os valores dos campos de entrada
    const av1 = parseFloat(document.getElementById('av1').value);
    const av2 = parseFloat(document.getElementById('av2').value);
    const avt = parseFloat(document.getElementById('avt').value);

    // Verificar se todos os campos foram preenchidos corretamente
    if (isNaN(av1) || isNaN(av2) || isNaN(avt)) {
        alert('Por favor, insira todas as notas corretamente.');
        return;
    }

    // Calcular a média ponderada
    const media = ((av1 * 25) + (av2 * 25) + (avt * 50)) / 100;

    // Exibir a média no elemento de resultado
    document.getElementById('resultado').innerText = `Sua média é: ${media.toFixed(2)}`;
}

// Função para limpar os campos de entrada e o resultado
function limparCampos() {
    // Limpar os campos de entrada
    document.getElementById('av1').value = '';
    document.getElementById('av2').value = '';
    document.getElementById('avt').value = '';

    // Limpar o resultado
    document.getElementById('resultado').innerText = '';
}
