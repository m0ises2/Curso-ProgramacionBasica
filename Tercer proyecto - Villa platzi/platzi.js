/*Permite conocer un número aleatorio sin importar el rango. Puede dar
número aleatorios negativos incluso.*/
function aleatorio(min, max) {
  var random = Math.random();
  var resultado = Math.floor(Math.random() * ((max - min) + 1)) + min;

  return resultado;
}

function dibujar (oEvent) {
  if (fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK) {
    console.log(cantidadVacas);
    for (var i = 0; i < cantidadVacas; i++) {
      papel.drawImage(vaca.imagen, aleatorio(0, 420), aleatorio(0, 420));
    }
  }
}

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarVaca() {
  vaca.cargaOK = true;
  dibujar();
}


//Inicio:
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
//ruta del tile de fondo:
var fondo = {
  url: "tile.png",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cantidadVacas = aleatorio(0, 10);
