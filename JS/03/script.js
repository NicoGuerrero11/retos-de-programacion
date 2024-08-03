// funciones

//funcion sin parametros ni retorno
function mostrar(){
    console.log("mensaje dentro de una funcion");
}
mostrar();

//funcion con parametros
function sumNum(num1,num2){
    console.log(`el numero ${num1} + el numero ${num2} es: ${num1+num2}`);
}
sumNum(1,2);
sumNum(30,2);
sumNum(4,6);

//funcion con retorno
function sqrt(num){
   return num**2;
   
}
console.log(sqrt(2));

// funcion anonima
const anonimo = function(){
    console.log("soy una funcion anonima");
}

//funcion de expresion (funcion anonima pero con parametro)
const mult = function(n){
    const max = n * n;
    return max;
}
console.log(mult(4));

// funcion de autoinvocacion (funciones anonimas que no necesitan ser llamadas)
let cubo = function(num){
    return num**3;
}(3);
console.log(cubo);

// funcion flecha
const suma = (num) => {
    return num + num;
}

console.log(suma(4));

// funcion con parametros por defectos
function nombres(nombre = "nicolas", apellido = "guerrero"){
    console.log(`mucho gusto ${nombre} ${apellido}`);
}

nombres("Nacho", "Matonte");
nombres();


// funcion dentro de una funcion
function num1(a){
    function num2(b){
        return a + b;
    }
    return num2
}

console.log(num1(3)(4));
let num5 = num1(5);
console.log(num5(4));

// ejercio extra
console.log("\n\n\n");
function fizzBuzz(valor1, valor2){
    let contador = 0;
    for(i = 1;i <= 100; i++ ){
        if(i % 3 === 0 && i % 5 === 0){
            console.log(`${valor1} ${valor2}`);
        }else if(i % 3 === 0){
            console.log(valor1);
        }else if(i % 5 === 0){
            console.log(valor2);
        }else{
            console.log(i);
            contador++;
        }
    }
    console.log("numeros impresos: ", contador);
    return contador;
    
}

fizzBuzz("fizz", "buzz");

