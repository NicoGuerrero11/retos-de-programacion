// https://developer.mozilla.org/es/docs/Web/JavaScript
// https://oregoom.com/javascript/operadores/

// comentario para una linea

/* comentario
para varias
lineas */

// variables y variable constante
let primeraVariable = "hola";
const variableConstante = 0;

// variables con los datos primitivos //

//datos de string
let variableString = "hola"; // string
console.log(typeof variableString);
let variableChar = "a"; // char (caracter)
console.log(typeof variableChar);

//datos numericos
let variableNumInt = 10; // enter
console.log(typeof variableNumInt);
let variableFloat = 5.53; // flotante (decimal)
console.log(typeof variableFloat);
let numeroMuyGrande = 231234214n; // Biginit: sirve para almacenar un numero muy grande.
console.log(typeof numeroMuyGrande);

//datos booleanos
let variableBool = true; //bool verdadero
console.log(typeof variableBool);
let variableBoolFalse = false; // bool falso
console.log(typeof variableBoolFalse);

//datos especiales
let variableUndefine = undefined; // undefine: representa un dato desconocido
console.log(typeof variableUndefine);
let variableNull = null; // null: en la forma de representar ausencia de valor.
console.log(typeof null);
let variableSymbol = Symbol(); // crea valores unicos e irrepetibles
console.log(typeof variableSymbol);


// imprimir el lenguaje
let lenguage = "JavaScript"
console.log("HOLA JAVASCRIPT");
console.log(`hola ${lenguage}`);