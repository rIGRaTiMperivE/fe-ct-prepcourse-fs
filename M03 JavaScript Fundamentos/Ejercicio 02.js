/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   let suma = x + y ;
   return suma;
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   let resta = x - y;
   return resta;
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   let divide = x / y;
   return divide;
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   let multiplicar = x * y ;
   return multiplicar;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   let modulo = x % y ;
   return modulo ;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
