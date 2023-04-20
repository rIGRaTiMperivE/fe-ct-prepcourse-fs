/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
    var array = [];
   for(i in objeto){
       array.push([i , objeto[i]] ) ;
   }
   
   return array;
}


function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var arreglo = [];
   var letras = {};
   arreglo = string.split('');
 
   for (const el of arreglo){

        letras[el] = letras[el] + 1 || 1 ;

      }
      return letras;
   }




function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var resultado="";
   var mayúsculas="";
   var minúscula="";
   for(i in string){
      if (string[i] === string[i].toUpperCase()) {
         mayúsculas+=string[i];
      }else{
         minúscula+=string[i];
      }
   }
      resultado = mayúsculas+minúscula;
      return resultado;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var espacio = frase.split(" ");
   var acumulada = "";
   for(i in espacio){
       var separada = espacio[i].split('');
       var reversada = separada.reverse();
       var juntada = reversada.join('');
       acumulada += juntada + " ";
   }
   return acumulada;

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var separado = numero.toString().split('');
   var reversado = separado.reverse();
   var juntado = parseInt(reversado.join(''));
   if(numero === juntado){
      return "Es capicua";
   }else{
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var arreglo =  string.split('');
    var final = "";
 
 
   for (const el in arreglo){

        if(arreglo[el] == 'a' || arreglo[el] == 'b' || arreglo[el] == 'c' ){
            continue; 
        }else{
             final = final + arreglo[el]  ;
        }

      }
      return final;
   }


function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort((a,b) =>
   a.length - b.length 
);
return arrayOfStrings;

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var flag = true;
   var nueva = [];
   function check(arr , val){
       return arr.some(arrVal => val === arrVal);
   }
   for(i in array1){
      flag =  check(array2 , array1[i]);
       if(flag){
           nueva.push(array1[i]);
       }
   }
   return nueva ;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
