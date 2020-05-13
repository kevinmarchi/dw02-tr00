
function calculoImc() {

    let peso,altura,calculoImc;    

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    calculoImc = peso/(altura*altura);

    if (calculoImc < 18.5) {
        document.write("<h1>Abaixo do peso</h1>");
    }
    else if (calculoImc <= 24.9) {
        document.write("<h1>Peso normal</h1>");
    }
    else if (calculoImc <= 29.9) {
        document.write("<h1>Sobrepreso</h1>");
    }
    else if (calculoImc <= 34.9) {
        document.write("<h1>Obesidade grau I</h1>");
    }
    else if (calculoImc <= 39.9) {
        document.write("<h1>Obeside grau II</h1>");
    }
    else {
        document.write("<h1>Obesidade Mórbida</h1>");
    }
}