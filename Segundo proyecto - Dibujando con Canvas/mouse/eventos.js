var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

//Evento para detectar la tecla pulsada:
document.getElementById("canvas").addEventListener("mousedown", dibujarMouse);
var x = 100;
var y = 100;
var papel = document.getElementById("canvas").getContext("2d");

dibujar(papel, "red", x-1, y-1, x+1, y+1);

function dibujar(lienzo, color, posIniX, posIniY, posFinX, posFinY) {
  //Arrancar el trazo:
  lienzo.beginPath();
  //Color de la linea:
  lienzo.strokeStyle = color;
  //Linea más grues:
  lienzo.lineWidth = 3;
  //Mover el lapiz:
  lienzo.moveTo(posIniX, posIniY);
  //Trazar una linea:
  lienzo.lineTo(posFinX, posFinY);
  //Dibujar la linea:
  lienzo.stroke();
  //Cerrar el trazo:
  lienzo.closePath();
}
function dibujarMouse(oEvent) {
  console.log(oEvent.x);
  console.log(oEvent.y);
  //Idenificar la tecla pulsada:
  var colorcito = "blue";
  var cantidadPasos = 5;
  dibujar(papel, colorcito, x, y, oEvent.x, oEvent.y);
  x = oEvent.x;
  y = oEvent.y;
}
