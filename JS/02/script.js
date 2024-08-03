// todos los operadores del lenguaje

let num1 = 10;
let num2 = 4;

// Operadores aritmeticos
console.log("Operaciones aritmeticos\n");
//suma
let sum = num1 + num2;
console.log(sum);
//resta
let resta = num1 - num2;
console.log(resta);
//multiplicacion
let mult = num1 * num2;
console.log(mult);
//division
let division = num1 / num2;
console.log(division);
//modulo
let mod = num1 % num2;
console.log(mod);
//incremento
let incre = num1++;
console.log(incre);
console.log(num1);
//decremento
let decre = num2--;
console.log(decre);
console.log(num2);
//exponentes
let expo = num1 ** 2;
console.log(expo);
//negacion unaria (cambia de signo)
let negacion = -num1;


// Operadores de asignacion
console.log("\noperaciones de asignacion\n");
// asignacion basica
let valor1 = num1;
console.log(valor1);
// asignacion de suma
valor1 += num2;
console.log(valor1);
// asignacion de resta
valor1 -= num1;
console.log(valor1);
// asignacion de multiplicacion
valor1 *= num2;
console.log(valor1);
// asignacion de division
valor1 /= num2;
console.log(valor1);
// asignacion de modulo
valor1 %= num1;
console.log(valor1);
// asignacion de exponente
valor1 **= num1;
console.log(valor1);

// Operaciones de comparacion
console.log("\nOperaciones de comparacion");
//igualdad
console.log(num1 == '11');
//no igual
console.log(num1 != num2);
//estrictamente igual
console.log(num1 === 11);
console.log(num1 === '11');
//estrictamente no igual
console.log(num1 !== '11');
console.log(num1 !== 11);
//mayor que
console.log(num1 > num2);
//menor que
console.log(num2 < num1);
//mayor o igual
console.log(num2 >= 2);
//menor o igual
console.log(num1 <= 30);

//Operadores logicos
console.log("\nOperadores logicos");
//AND (ambos deben ser true o false)
console.log(num1 >5 && num2<20);
console.log(num1 >5 && num2>20);
//OR (solo uno tiene que ser true)
console.log(num1>6 || num2>20);
console.log(num1>40 || num2>20);
//NOT (invierte el valor)
let num3 = true;
console.log(!num3);

// Operadores bit a bit
console.log("\nOperadores bit a bit");
let a = 6;  // 0110 en binario
let b = 3;  // 0011 en binario

console.log(a & b);  // AND bit a bit: 0010 (salida: 2)
console.log(a | b);  // OR bit a bit: 0111 (salida: 7)
console.log(a ^ b);  // XOR bit a bit: 0101 (salida: 5)
console.log(~a);     // NOT bit a bit: 1001 (en complemento a dos, salida: -7)
console.log(a << 1); // Desplazamiento a la izquierda: 1100 (salida: 12)
console.log(a >> 1); // Desplazamiento a la derecha con signo: 0011 (salida: 3)
console.log(a >>> 1); // Desplazamiento a la derecha sin signo: 0011 (salida: 3)


// Operador condicional (Ternario)
console.log("\nOperador condicional (Ternario)");
let edad = 18
let resultado = edad >= 18 ? 'Es mayor de edad.' : 'Es menor de edad.'
console.log(resultado);


console.log("\n\n######################################\n\n");

//condicional
console.log("\ncondicionales");
let mayorEdad = 16;
if(mayorEdad >= 18){
    console.log("puedes entrar a la fiesta");
}else{
    console.log("aun no eres mayo de edad.");
}
//bucle for
console.log("\nbucle for");
const num = [1,2,3,4,5,6,7];
for(i=0;i<num.length;i++){
    console.log(num[i]);
}
//bucle forEach
console.log("\nbucle for each");
num.forEach(numero => {
    console.log(numero);
})
//bucle for....in
console.log("\nbucle for...in");
for(variable in num){
    console.log(num[variable]);
}
//bucle for....of
console.log("\nbucle for..of");
for(variable of num){
    console.log(variable);
}
//bucle while
console.log("\nWhile");
let par = 2;
while(par <= 10){
    if(par % 2 === 0){
        console.log(par);
    }
    par++;
}
//bucle Do while
console.log("\ndo...while");
par = 1;
do{
    if(par % 2 === 0){
        console.log(par);
    }
    par++;
}while(par <= 20)
//switch

//Problema extra.
console.log("\n Problema extra\n");
for(i = 10; i< 56; i++){
    if ( i % 2 === 0 && i !== 16 && i % 3 !== 0){
        console.log(i);
    }
}