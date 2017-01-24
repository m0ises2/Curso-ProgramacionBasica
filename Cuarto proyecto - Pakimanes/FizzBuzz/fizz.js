/*Fizz Buzz*/
function esDivisible (dividendo, divisor) {
  return (dividendo % divisor) == 0;
}

var cantidadNumero = 100;
var divisible = false;

for (var i = 1; i <= cantidadNumero; i++) {
  divisible = false;
  //Si es divisible por 3:
  if (esDivisible(i, 3)) {
    document.write("Fizz");
    divisible = true;
  }
  //Si es divisible por 5:
  if (esDivisible(i, 5)) {
    document.write("Buzz");
    divisible = true;
  }
  //Si no es divisible por ninguno de los dos:
  if(!divisible) {
    document.write(i);
  }

  //Imprimimos un salto de linea:
  document.write("<br>");
}
