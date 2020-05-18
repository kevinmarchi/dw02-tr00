
function moveRelogio(){
    momentoAtual = new Date()
    hora = momentoAtual.getHours()
    minuto = momentoAtual.getMinutes()

    if (minuto <= 9) {
        minuto = '0'+momentoAtual.getMinutes();
    }

    segundo = momentoAtual.getSeconds()

    if (segundo <= 9) {
        segundo = '0'+momentoAtual.getSeconds();
    }

    horaImprimivel = hora + " : " + minuto + " : " + segundo

    document.body.innerHTML = horaImprimivel

    setTimeout("moveRelogio()",1000)
}