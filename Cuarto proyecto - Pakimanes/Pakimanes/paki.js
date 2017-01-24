/*Pakimanes*/
var imagenes = [];
imagenes["Cauchin"] = "imagenes/vaca.png";
imagenes["Pokacho"] = "imagenes/pollo.png";
imagenes["Tocinauro"] = "imagenes/cerdo.png";


var cauchin = new Pakiman("Cauchin", 100, 35, "tierra");
var pokacho = new Pakiman("Pokacho", 80, 55, "Electrico");
var tocinauro = new Pakiman("Tocinauro", 120, 40, "Tocineta");

var coleccion = [];
coleccion.push(cauchin);
coleccion.push(pokacho);
coleccion.push(tocinauro);

//El ciclo basado en "in" itera sobre el indice creado
//para las posiciones del array:
/*for (var p in coleccion) {
  coleccion[p].mostrar();
}*/

//El cilo basado en "of" itera sobre el objeto que está
//dentro del array:
for (pakiman of coleccion) {
  pakiman.mostrar();
}
