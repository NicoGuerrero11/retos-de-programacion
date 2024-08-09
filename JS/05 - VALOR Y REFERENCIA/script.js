// Asignacion por valor
console.log("Asignacion por valor");
/* 
    Se usa en los tipos de datos primitivos. Son asignados por valor; significa que cuando lo asignas a una variable, 
    otra variable, lo que se copia es el valor, no la variable
*/
let a = 5;
let b = a;
console.log(a);
console.log(b);
b = 10;
console.log(a);
console.log(b);

//funciones con datos primitivo
console.log("\nfunciones con datos primitivo");

function value(x){
    x = 10;
}
value(a)
console.log(a);





// Asignacion por referencia
console.log("\n\nAsignacion por referencia");
/* 
    se usa en los tipos de datos no primitivos(array, object, function, etc).
    Al asignar este tipo de datos a una variable, estas copiando la referencia, y no el valor, por lo tanto todos los cambios
    se ven afectados por todas las variables que esten apuntadas al mismo tipo de dato
*/

// objetos
console.log("\nobjetos");
let c = {
    x: 1,
    y: 2
}

let d = c;
console.log(c);
console.log(d);
d.x= 10;
console.log(c);
console.log(d);

// Arreglos
console.log("\narreglos");
let arr = [1,2,4];
let e = arr;
console.log(arr);
console.log(e);
e.push(5);
console.log(arr);
console.log(e);

// Funciones
console.log("\nFunciones con dato no primitivo");

// funciones con datos de referencia
function valueModi(obj){
    obj.value = 10;
}
let f = {value: 5};
valueModi(f);
console.log(f.value);


/* 
    Ejercicio extra
*/
console.log("\nEjercicio extra");

let num1 = 10;
let num2 = 20;
function parValor(par1 , par2){
    let a = par1;
    par1 = par2;
    par2 = a;
    console.log(`num1: ${par1} y num2: ${par2}`);   
}

parValor(num1, num2);
console.log(`num1: ${num1} y num2: ${num2}`);


let arr1 = [20,50];
let arr2 = [30,40]
parValor(arr1, arr2);
console.log(`num1: ${arr1} y num2: ${arr2}`);
