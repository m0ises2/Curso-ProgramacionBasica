function dibujar(color, posIniX, posIniY, posFinX, posFinY) {
  //Arrancar el trazo:
  lienzo.beginPath();
  //Color de la linea:
  lienzo.strokeStyle = color;
  //Mover el lapiz:
  lienzo.moveTo(posIniX, posIniY);
  //Trazar una linea:
  lienzo.lineTo(posFinX, posFinY);
  //Dibujar la linea:
  lienzo.stroke();
  //Cerrar el trazo:
  lienzo.closePath();
}

var d = document.getElementById("canvasDibujo");
var lienzo = d.getContext("2d");

dibujar("red", 100, 10, 200, 100);
dibujar("black", 120, 10, 250, 100);
dibujar("green", 140, 10, 299, 100);
