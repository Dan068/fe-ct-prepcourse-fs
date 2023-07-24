const { arrayContiene } = require("./homework");

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
console.log(arrayNuevo)