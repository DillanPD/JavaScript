function sumarNumeros() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var resultado = num1 + num2;

    document.getElementById('resultado').innerHTML = "El resultado es: " + resultado;
}

function restarNumeros() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var resultado = num1 - num2;

    document.getElementById('resultado').innerHTML = "El resultado es: " + resultado;
}

function multiplicarNumeros() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var resultado = num1 * num2;

    document.getElementById('resultado').innerHTML = "El resultado es: " + resultado;
}

function dividirNumeros() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var resultado = num1 / num2;

    document.getElementById('resultado').innerHTML = "El resultado es: " + resultado;
}
