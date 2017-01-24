/*Clase pakiman*/
class Pakiman {
  //Funciones:
  constructor(nombre, vida, ataque, tipo) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.nombre];
  }

  hablar() {
    alert(this.nombre);
  }

  mostrar() {
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<strong>Nombre: " + this.nombre + "</strong> <br>");
    document.write("<strong>Vida: " + this.vida + "</strong> <br>");
    document.write("<strong> Ataque: " + this.ataque + "</strong> <br>");
    document.write("<strong> Tipo: " + this.tipo + "</strong> <br>");
    document.write("</p> <hr>");
  }
}
