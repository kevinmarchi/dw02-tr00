function informarDados() {

    let oNome = document.getElementById('nome');
    let oRua = document.getElementById('rua');
    let oNumero = document.getElementById('numero');
    let oCep = document.getElementById('cep');
    let oRegiao = document.getElementById('regiao');
    let oEstado = document.getElementById('estado');
    let oMunicipio = document.getElementById('municipio');

    let oDiv = document.getElementById('dados');

    oDiv.innerHTML += 'Nome: ' + oNome.value + '<br>';
    oDiv.innerHTML += 'Rua: ' + oRua.value + '<br>';
    oDiv.innerHTML += 'Número: ' + oNumero.value + '<br>';
    oDiv.innerHTML += 'CEP: ' + oCep.value + '<br>';
    oDiv.innerHTML += 'Região: ' + oRegiao.options[oRegiao.selectedIndex].value + '<br>';
    oDiv.innerHTML += 'Estado: ' + oEstado.options[oEstado.selectedIndex].value + '<br>';
    oDiv.innerHTML += 'Município: ' + oMunicipio.options[oMunicipio.selectedIndex].value + '<br>';
}