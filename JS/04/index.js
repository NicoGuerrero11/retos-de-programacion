//1. ARRAY
let arr = [0,1,2,3,4,5,6,7,8,9];
console.log(arr);

// agregar un valor al final del array (push)
arr.push(10);
arr.push(11);
console.log(arr);

// eliminar el ultimo valor con pop
arr.pop();
console.log(arr);

// ordenar el arreglo con sort
let ar = [5,3,6,7,3,1,3,5,6,4,7,8];
console.log(ar);
ar.sort();
console.log(ar);

// acceder a los elementos por medio del index
console.log(arr[2]);
console.log(ar[2]);

// seleccionando el index podemos modificar su valor
console.log(arr[1]);
arr[1] = 5;
console.log(arr[1]);

// Actualizando con MAP
// El método map crea un nuevo array de la misma longitud que el original, pero con los elementos transformados
let numbers = [1, 2, 3]
let doubleNumbers = numbers.map((number) => {
  return number * 2
})

//2. SET
// No acepta duplicados
let mySet = new Set(["Oleojake", 30]); 

// 2.1 INSERCCIÓN EN SET
mySet.add("Jijona");

// 2.2 BORRADO EN SET
mySet.delete("Oleojake");
mySet.clear(); // Borra todo el SET


// 3. MAPA
// No permite repetir claves
let myMap = new Map ([["Pablo", 30], ["Doly", 25]]);

// 3.1 INSERCCIÓN EN MAPA
myMap.set("Bonsito", 16);

// 3.2 BORRADO EN MAPA
myMap.delete("Bonsito");
myMap.clear(); // Borra todo el Mapa

// 4. OBJETOS
// Creación
let myObject = { nombre: 'Pablo', edad: 30, ciudad: 'Alicante' };
console.log(myObject);
// Inserción
myObject.trabajo = 'Dev';

// Actualización
myObject.edad = 26;

// Borrado
delete myObject.ciudad;
console.log(myObject.edad)

// Ejercicio extra


