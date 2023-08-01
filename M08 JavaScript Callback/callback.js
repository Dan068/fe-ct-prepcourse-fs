let devuelvoUsuario = function () {
    return 'Daniela';
} // Primero hacemos una funcion con el nombre

let devulevoSaludo = function () {
    return 'Hola';
}//Tenemos otra funcion con el saludo


let Saludar = function (cb1, cb2) {
    return cb1() + ' ' + cb2();

};// aqui agregamos una funcion donde vamos a retornar las ultimas 2 funciones juntas


let resultado = Saludar(devulevoSaludo, devuelvoUsuario);
/*Esta es una funcion llamada resultado y la igualaremos a la funcion saludar y tiene por parametros los 
nombres de los 2 funciones anteriores
//console.log(resultado);
/* hacemos el console log para visualizar en consola.
la consola nos muestra el resultado de las 3 primeras funciones. 
la primera que es retornarv el nombre, la segunda de retotnar el hola y la tercera que las junta en un strings*/



let devuelvoFrase = function (comida){
    //return 'Hoy quiero comer : ' + comida;
};// declaramos una variable con una function que devuelve el string

let hablar = function (comida, cb){
    //return cb(comida);
};// declaramos una segunda variable que retorne un callback y la comida recibida por parametro

let fraseFinal = hablar('Pizza', devuelvoFrase);
//console.log(fraseFinal);
// Al final declaramos una funcion donde vamos a meter el resultado de ambas funciones anteriores



let string = 'tutorial';
let newString = string.charAt(0).toUpperCase() + string.slice(1);
return newString;

