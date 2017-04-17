// document.getElementsByClassName('className')
// document.getElementById('id')
// document.getElementsByName('name')
// document.getElementsByTagName('tagName')
// document.querySelector('query')
// document.querySelectorAll('query')

 var agujaHoras = document.querySelector('.aguja-horas')
// console.log(agujaHoras)
var agujaMinutos = document.querySelector('.aguja-minutos')
var agujaSegundos = document.querySelector('.aguja-segundos')

function obtenerHora() {
    var fecha = new Date()

    var hora = fecha.getHours()
    var minuto = fecha.getMinutes()
    var segundo = fecha.getSeconds()

    var gradosHora = ((hora/12)*360) +90
    var gradosMinuto = ((minuto/60)*360) +90
    var gradosSegundo = ((segundo/60)*360) +90

    agujaHoras.style.transform = "rotate(" + gradosHora + "deg)"
    agujaMinutos.style.transform = "rotate(" + gradosMinuto + "deg)"
    agujaSegundos.style.transform = "rotate(" + gradosSegundo + "deg)"

    console.log(fecha)
    console.log(hora)
    console.log(gradosHora)
    console.log(gradosMinuto)
    console.log(gradosSegundo);
}
//obtenerHora()
setInterval(obtenerHora, 1000)
