/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   var devolverPrimerElemento = [array];
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var devolverUltimoElemento = [array];
   return array[array.length -1];
}
   

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   var largo =[ array];
   return(array.length);
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masUno = [];
   for ( var i = 0; i <array.length; i++){
   masUno.push(array[i] + 1);
   } return masUno;
   
   }
   


function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
   
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var frase = palabras.join(' ');
   return frase;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   for ( var i = 0; i < array.length; i++){
      if (array [i] === elemento){
         return true;
      }
   } return false;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var total = 0;
arrayOfNums.forEach(num => total += num );
return total;

}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   resultado = 0
   for (var i = 0; i <resultadosTest.length; i++){
      resultado = resultado + resultadosTest[i]
   } return resultado / resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

 let max = Math.max(...arrayOfNums);
 return max;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var resultado = 1
   if (arguments.length == 0){
      return 0;
   } else if ( arguments.length === 1){
      return arguments[0];

   } else {
      for ( var i = 0; i < arguments.length; i++){
         resultado = resultado * arguments[i];
      } return resultado;
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contador = [];
   for ( var i = 0; i < array.length; i++){
      if (array [i] > 18){
         contador++;
      }
   } return contador;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if ( numeroDeDia <1 || numeroDeDia > 7){
      return "Dato incorrecto, elija un numero entre 1 y 7";
   } else if (numeroDeDia === 1 || numeroDeDia === 7){
      return "Es fin de semana";
   } else {
      return "Es dia laboral"
   }
   

}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   return (String(num)[0] == '9');
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   return array.every( element => element === array[0]);
   
   
   
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   
      const mesesPedidos = ["Enero", "Marzo", "Noviembre"];
      const mesesEncontrados = [];
    
      for (let i = 0; i < array.length; i++) {
        const mes = array[i];
        for (let j = 0; j < mesesPedidos.length; j++) {
          if (mes === mesesPedidos[j]) {
            mesesEncontrados.push(mes);
            break;
          }
        }
      }
    
      if (mesesEncontrados.length === mesesPedidos.length) {
        return mesesEncontrados;
      } else {
        return "No se encontraron los meses pedidos";
      }
    }


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla = [0]
   var i =(0)
 do{
  i = i + 1
  tabla.push (6 * i)
 } while (i < 10)
 return(tabla)

}






function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let arrayNuevo = []
    for ( var i=0; i< array.length; i++){
        if ( array[i] >100)
        arrayNuevo.push(array[i]);
    } return arrayNuevo;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
  var  numero =[];
  var mensaje = "Se interrumpió la ejecución";
  for ( var i = 1; i < 11; i++){
   valor = num += 2;
   numero.push(valor);
   if (valor == i) {
      numero = mensaje;
      break;
   } 
  } 
   
  return numero;
  
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
    
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let numeros = [];
   for (var i= 1; i< 11; i++){
      if (i === 6){
         continue;
      }
      num = num + 2;
      numeros.push(num);
   } return numeros;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
