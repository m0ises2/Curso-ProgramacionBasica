var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

//Evento para detectar la tecla pulsada:
document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(oEvent) {
  console.log(oEvent);
  //Idenificar la tecla pulsada:
  switch (oEvent.keyCode) {
    case teclas.UP:

      break;
    case teclas.DOWN:

      break;
    case teclas.LEFT:

      break;
    case teclas.RIGHT:

      break;
    default:

  }
}
