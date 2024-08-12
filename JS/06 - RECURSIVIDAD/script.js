//imprimir los numeros del 100 al 1

function recursividad(n){
    // base
    if (n >= 0){
        console.log(n);
        return recursividad(n-1);
    }
    
}

//recursividad(100);

/* 
    ejercicio extra
*/

// factorial

function factorial(n){
    //base
    if(n === 0 || n === 1){
        return n;
    }
    else{
        // recursividad
        return n * factorial(n-1);
    }
}

console.log(factorial(5));


// fibonacci
function fibonacci(n){
    // base
    if(n === 0 || n === 1){
        return n;
    }else{
        // recursividad
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(7)); 
// te el valor de la posicion empezando en el cero