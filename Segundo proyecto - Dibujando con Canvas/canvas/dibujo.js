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
function dibujoPorClick() {
  var valor = parseInt(texto.value);
  var aux = anchoCanvas/valor;

  for (var i = 0; i < valor; i++) {
    //Inferior izquierdo:
    dibujar(color_, 0, i*aux, aux*(i+1), 300);
    //Inferior derecho:
    dibujar(color_, i*aux, 0, 300, aux*(i+1));
  }

  //Borde inferior izquierdo:
  dibujar(color_, 1,0,1,anchoCanvas-1);
  dibujar(color_, 0,anchoCanvas-1,anchoCanvas-1,anchoCanvas-1);
  //Borde superior derecho:
  dibujar(color_, 1,0,anchoCanvas-1,1);
  dibujar(color_, anchoCanvas-1,1,anchoCanvas-1,anchoCanvas-1);

}

var d = document.getElementById("canvasDibujo");
var anchoCanvas = d.width;
var lienzo = d.getContext("2d");
var color_ = "#FAA";

var texto = document.getElementById("cantidad");
var botoncito = document.getElementById("boton");

//Eventos:
botoncito.addEventListener("click", dibujoPorClick);
