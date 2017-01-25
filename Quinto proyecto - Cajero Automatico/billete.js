class Billete {
  constructor( valor, cantidad) {
    this.valor = valor;
    this.cantidad = cantidad;
  }
  restarUno(billete) {
    billete.cantidad--;
    return billete;
  }
}
