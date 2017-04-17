// document.getElementsByClassName('className')
// document.getElementById('id')
// document.getElementsByName('name')
// document.getElementsByTagName('tagName')
// document.querySelector('query')
// document.querySelectorAll('query')
//style.transform
// setInterval
var agujaHoras = document.querySelector('.aguja-horas')
// console.log(agujaHoras)
var agujaMinutos = document.querySelector('.aguja-minutos')
var agujaSegundos = document.querySelector('.aguja-segundos')

function obtenerHora() {
  var fecha = new Date()
  console.log(fecha)
  // getSeconds()
  // getMinutes()
  // getHours()
  var hora = fecha.getHours()
  var minutos = fecha.getMinutes()
  var segundos = fecha.getSeconds()
  var gradosHora = ((hora/12) * 360) + 90
  var gradosMinutos = ((minutos/60)*360) + 90
  var gradosSegundos = ((segundos/60)*360) + 90

  agujaHoras.style.transform = "rotate("+ gradosHora + "deg)"
  agujaMinutos.style.transform = "rotate("+ gradosMinutos+ "deg)"
  agujaSegundos.style.transform = "rotate("+ gradosSegundos + "deg)"

  console.log(hora)
  console.log(minutos)
  console.log(segundos)
}
setInterval(obtenerHora, 1000)
