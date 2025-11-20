let numeroAtual = "";
let numeroAnterior = "";
let operacao = "";

function calcular() {
    let resultado = 0;

    if (operacao === '+') {
        resultado = parseFloat(numeroAnterior) + parseFloat(numeroAtual);
    }
    if (operacao === '-') {
        resultado = parseFloat(numeroAnterior) - parseFloat(numeroAtual);
    }
    if (operacao === '*') {
        resultado = parseFloat(numeroAnterior) * parseFloat(numeroAtual);
    }
    if (operacao === '/') {
        if (parseFloat(numeroAtual) === 0) {
            alert("Erro: divisão por zero!");
            return;
        }
        resultado = parseFloat(numeroAnterior) / parseFloat(numeroAtual);
    }

  //  alert("Resultado: " + resultado);
    document.getElementById('display').innerText = resultado;

    // Limpa variáveis para próxima operação
    numeroAnterior = resultado;
    numeroAtual = "";
    operacao = "";
}

function clearDisplay() {
    document.getElementById('display').innerText = "";
}

function digitar(valortecla) {

    switch (valortecla) {

        case '+':
            numeroAnterior = document.getElementById('display').innerText;
            operacao = '+';
            clearDisplay();
            break;

        case '-':
            numeroAnterior = document.getElementById('display').innerText;
            operacao = '-';
            clearDisplay();
            break;

        case '*':
            numeroAnterior = document.getElementById('display').innerText;
            operacao = '*';
            clearDisplay();
            break;

        case '/':
            numeroAnterior = document.getElementById('display').innerText;
            operacao = '/';
            clearDisplay();
            break;

        case '=':
            numeroAtual = document.getElementById('display').innerText;
            calcular();
            break;

        case 'CE':
            clearDisplay();
            numeroAtual = "";
            numeroAnterior = "";
            operacao = "";
            break;

        default:
            document.getElementById('display').innerText += valortecla;
            break;
    }
}