//1. ARRAY
let arr = [0,1,2,3,4,5,6,7,8,9];
console.log(arr);

// agregar un valor al final del array (push)
arr.push(10);
arr.push(11);
console.log(arr);
//agregar valor al princio
arr.unshift(-1);
console.log(arr);
// eliminar el ultimo valor con pop
arr.pop();
console.log(arr);
//elimina un valor al inicio
arr.shift()
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
console.log(numbers);
console.log(doubleNumbers);
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

console.log("\nEjercicio extra\n");

function myAgenda(){
  let agenda = new Map();

  let ciclo = true;
  while(ciclo){
    console.log("1. buscar contacto."); 
    console.log("2. insertar contacto."); 
    console.log("3. actualizar contacto."); 
    console.log("4. eliminar contacto."); 
    console.log("5. salir.");
    let opcion = prompt("Que opcion desea realizar? \n")


    let name = null;
    let phone = null;
    let phoneInput = null;
    

    switch(opcion){
      case "1":
        name = prompt("ingrese nombre a buscar: ");
        if (agenda.has(name)){
          alert(`el contacto de ${name}, es: ${agenda.get(name)}`);
        }else{
          alert(`el contacto ${name}, no existe.`);
        }
        break;
      case "2":
        name = prompt("ingresa el nombre: ")
        phoneInput = prompt("ingrese el numero de telefono: ")
        phone = parseInt(phoneInput, 10);
        if(Number.isInteger(phone) && phone > 0 && phoneInput.length <= 11){
          agenda.set(name, phone);
        }else{
          alert("no introdujo el numero correctamente.");
        }
        
        break;
      case "3":
        name = prompt("ingrese el contacto que desea actualizar. ");
        phoneInput = prompt("ingrese el numero de telefono: ")
        phone = parseInt(phoneInput, 10);
        if(Number.isInteger(phone) && phone > 0 && phoneInput.length <= 11){
          agenda.set(name, phone);
        }else{
          alert("no introdujo el numero correctamente.");
        }
        break;
      case "4":
        name = prompt("ingrese el nombre que desea eliminar. ");
        if(agenda.has(name)){
          agenda.delete(name);
          alert("contacto borrado correctamente")
        }else{
          alert("el contacto no existe.")
        }
        break;

      case "5":
        alert("a seleccionado la opcion de salir del programa.");
        ciclo = false;
      break;
      default:
        alert("opcion no valida. Ingresa una opcion del 1 al 5.");
    }
  }
}

myAgenda();
