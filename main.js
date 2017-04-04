// Temporizador, curso JavaScript.

//Se ejecuta al ser llamado por el boton
document.getElementById('formularioPrincipal').addEventListener('submit', ejecutar);
var btnEstado = false;
var repetidor;
var fechaCumpleanos;

//Inicia el Temporizador
function ejecutar(e){
  fechaCumpleanos = document.getElementById('txtFecha').value.split("/");
  mostrarBoton();
  calcularTiempo();
  repetidor = setInterval(calcularTiempo, 1000);
  e.preventDefault();
}

//Muestra el boton ocultop para detener el conteo
function mostrarBoton(){
  var detencion = document.getElementById("detencion");
  if (btnEstado===false) {
    detencion.innerHTML += '<div style="margin-top: 1.5%">' +
                                      '<a onclick="detener()" class="btn btn-danger"'+ '">DETENER</a>' +
                                    '</div>';
  }
  btnEstado = true;
}

//Detiene el Temporizador y habilita el textbox
function detener(){
clearInterval(repetidor);
}

//Calcula los dias faltantes en relacion a los meses faltantes y la fecha actual del sistema
function calcularTiempo(){
  // Se dividen entre 1 para que quede como un entero ya que la impresion daba un numero entre comillas y generaba un error
  var diaCumpleanos = fechaCumpleanos[0]/1;
  var mesCumpleanos = fechaCumpleanos[1]/1;
  var fechaActual = new Date();
  var contadorMes = fechaActual.getMonth()+1;
  var diasFaltantes = 0;
  var contadorDias = 0;
  var diasMes = 0;
  var diasActuales = fechaActual.getDate()/1;

  while (contadorMes !== mesCumpleanos) {
    //Switch para tomar los dias correspondientes a cada mes
    switch (contadorMes) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        diasMes = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        diasMes =30
        break;
        case 2  :
          diasMes = 28;
          break;
    }
    //Verifica si el anio actual es bisiesto y de serlo al mes de Febrero le da un valor de 29 dias
    if(contadorMes === 2 && (fechaActual.getFullYear()%4)==0){
      diasMes = 29;
    }
    contadorDias = contadorDias + diasMes;
    ++contadorMes ;
    if ((contadorMes > 12) == true) {
      contadorMes = 1;
    }
  }
  diasFaltantes = contadorDias + diaCumpleanos - diasActuales - 1 ;
  //Se llama a la funcion contador para obtener los datos para la animacion
  contador(diasFaltantes, fechaActual);
}

//Obtiene los datos para las actualizaciones
function contador(diasFaltantes, fechaActual){
  var dias = diasFaltantes;
  var horas = horasContador(fechaActual);
  var minutos = minutosContador(fechaActual);
  var segundos =   segundosContador(fechaActual);

if (dias<10) {
  dias = "0" + dias;
}
if (horas<10) {
  horas = "0" + horas;
}
if (minutos<10) {
  minutos = "0" + minutos;
}
if (segundos<10) {
  segundos = "0" + segundos;
}
  //Manda a llamar las funciones para obtener las horas, minutos y segundos faltantes y hacer la impresion
  console.log("Dias Faltantes: " + dias);
  console.log("Horas Faltantes: " + horas);
  console.log("Minutos Faltantes: " + minutos);
  console.log("Segundos Faltantes: " + segundos);

//Envia los valores a las etiquetas Label en la pagina
document.getElementById('diasLabel').innerHTML = dias;
document.getElementById('horasLabel').innerHTML = horas;
document.getElementById('minutosLabel').innerHTML = minutos;
document.getElementById('segundosLabel').innerHTML = segundos;
}

//Calula las horas faltantes en base a la hora actual del sistema
function  horasContador(fechaActual){
  return horasFaltantes = 23-fechaActual.getHours();
}

//Calcula los minutos faltantes en base a la hora actual del sistema
function minutosContador(fechaActual) {
  return minutosFaltantes = 59 - fechaActual.getMinutes();
}

//Calcula los segundos faltantes en base a la hora actual del sistema
function segundosContador(fechaActual) {
  return segundosFaltantes = 59 - fechaActual.getSeconds();
}
