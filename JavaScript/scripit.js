function calcular(operacao) {
    // pegar o valor que o usuario digitou no input numero 1
    // parseFloat converte o valor de texto para numero com virgula
    var numero1 = parseFloat(document.getElementById('num1').value);
    var numero2 = parseFloat(document.getElementById('num2').value);

    var resultado;
    // escolha caso
    // switch é a estrutura de escolha
    switch (operacao) {
        // caso
        case 'somar':
            resultado = numero1 + numero2
            // pare
            break
        case 'subtrair':
            resultado = numero1 - numero2
            break
        case 'multiplicar':
            resultado = numero1 * numero2
            break
        case 'dividir':
            // se e senao
            if (numero2 == 0) {

                resultado = 'Não é possível dividir por zero!'
            } else {
                resultado = numero1 / numero2
            }
        case 'resto':
            resultado = numero1 % numero2
        case 'exp':
            resultado = numero1 ** numero2

            break
    }
    // mostrar o resultado na tela
    document.getElementById('resultado').innerText = resultado.toString();
}