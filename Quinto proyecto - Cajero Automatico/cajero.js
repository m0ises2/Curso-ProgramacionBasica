function retirar(cantidad) {
  //Dinero total disponible:
  var total = 0;
  var entregado = [];
  var papeles = 0;
  var div = 0;
  var r = document.getElementById("resultados");


  //Ciclo para recorrer el array de billetes disponibles:
  for (billete of caja) {
    //Tengo pendiente dar dinero todavía?:
    if (cantidad > 0) {
      div = Math.floor(cantidad/billete.valor);
      if (div > billete.cantidad) {
        papeles = billete.cantidad;
      } else {
        papeles = div;
      }
      //Guardo la cantidad de billetes que estoy dando para esta denominación:
      entregado.push(new Billete(billete.valor, papeles));
      //Actualizo la cantidad de dinero que me falta dispensar:
      cantidad = cantidad - (papeles * billete.valor);
    }
  }

  if (cantidad == 0) {
    for (var e of entregado) {
      if (e.cantidad != 0) {
          r.innerHTML = r.innerHTML + e.cantidad + " billetes de " + e.valor + "<br>";
      }
    }
  } else {
    r.innerHTML = "No tengo el saldo suficiente para darte esa cantidad. ";
  }
}

function saberCantidad() {
  cUsuario = parseInt(document.getElementById("dinero").value);
  retirar(cUsuario);
}

//Events Listeners:
document.getElementById("boton").addEventListener("click", saberCantidad);

/*Cajero automatico =D*/
var caja = [];
var cUsuario = 0;

//Billete de 50:
caja.push(new Billete(50, 10));
//Billete de 20:
caja.push(new Billete(20, 1));
//Billete de 10:
caja.push(new Billete(10, 1));
