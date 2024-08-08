// CADENAS DE CARACTERES

console.log("Cadenas de caracteres\n");
let nombre1 = "nicolas"; // comillas dobles
let nombre2 = 'nicolas'; // comillas simples
let nombre3 = `nicolas`; // comillas inversas
console.log(typeof nombre1);
console.log(typeof nombre2);
console.log(typeof nombre3);

// concatenacion de cadenas
console.log("\nConcatenacion");

// 1. se realiza con el operador "+".
let nombre = "nicolas";
let apellido = "guerrero";

let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

// 2. Otra forma para concatenar es con el metodo "concat()"
nombreCompleto = nombre.concat(" ", apellido);
console.log(nombreCompleto);

// 3. Concatenacion con plantillas laterales.
nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

// Conversion de cadenas a mayusculas o minusculas
console.log("\nConversion mayusculas-minusculas");

// para mayuscula el metodo "toUpperCase()".
// para minuscula el metodo "toLowerCase()".

let mensaje = "Aprendiendo Programacion con RETOS";
let mensajeMayusculas = mensaje.toUpperCase();
let mensajeMinuscula = mensaje.toLowerCase();
console.log(mensajeMayusculas);
console.log(mensajeMinuscula);

// Acceder a caracteres especificos
console.log("\nCaracteres especificos");

// 1. charAt()
let cadena = "hola, mundo"
console.log(cadena);
let caracter = cadena.charAt(6);
console.log(caracter);

// 2. Corchetes [];
caracter = cadena[6];
console.log(caracter);

// 3. codePointAt()
/* retorna un valor Unicode.
   Es util para caracteres que estan en otro idioma o emojis */
caracter = cadena.codePointAt(6);
console.log(caracter);

// 4. slice(start, end)
/* es este puedes seleccionar la cantidad de 
caracteres a tu gusto */
caracter = cadena.slice(6, 7);
console.log(caracter);

// 5. substring() misma funcion que slice()
caracter = cadena.substring(6, 7);
console.log(caracter);

// Subcadenas: seleccionas mas de un caracter
console.log("\nSubcadenas");

let subCadena = "hola papus";

/* tanto en slice como en subString si no agregamos uno de los
dos valores, automaticamente se va hasta el inicio o final respectivamente */
// 1. Slice()
let sub = subCadena.slice(0,4);
console.log(sub);

// 2. subString()
sub = subCadena.substring(5); // 5 es el valor inicial. el otro se va directamente hasta el ultimo.
console.log(sub);

// 3. substr(starIndex, length)
console.log(subCadena.substr(0,4)); // nunca se usa.

// 4. split(separator, limit) separa cadenas en index de arreglos
sub = subCadena.split("");
console.log(sub);
sub = Array.from(subCadena);
console.log(sub);

// longitud
console.log("\nLongitud");
// length (calcula incluyendo espacios, signos de puntacion, emojis, etc)
let palabra = "hola a todo el mundo";
console.log(palabra.length);

// Repeticion
console.log("\nRepeticion");

// metodo repeat()
let nime = "nico";
let separador = "-"
console.log(nime.repeat(4));
console.log(nime + separador.repeat(4));

// recorrido
console.log("\nRecorrido");

let frase = "hola, mundo!";
// 1. bucle for
for(let i = 0; i < frase.length; i++){
    console.log(frase[i]);
}
console.log("\n-------");

// 2. for of
for (let caracteres of cadena){
    console.log(caracteres);
}
console.log("\n------");

//3. for each
let separacion = frase.split("")
separacion.forEach(separar => {
    console.log(separar);
});
console.log("\n------");

// 4. Array.from() //funcion parecida al split
separacion = Array.from(frase);
separacion.forEach(separar => {
    console.log(separar);
});
console.log("\n--------");

// 5. split() con map()
frase.split("").map(caracter => {
    console.log(caracter);
});

console.log("\n------");
// 6. While o do-while
let i = 0;
while(i < frase.length){
    console.log(frase[i]);
    i++;
}
console.log("\ndo while");
let n = 0;
do{
    console.log(frase[n]);
    n++;
}while(n < frase.length);

// Remplazo
console.log("\nRemplazo");

let surname = "guerrero";
console.log(surname);
surname = "alarcon";
console.log(surname);

// divison
/* se hace con los metodos de split - subString - slice.
busca separar el string. Principalmente se usa split, donde guardamos
la separacion en un arreglo. 
*/

// Union: al tener un arreglo de caracteres y queremos unirlo en una sola string
console.log("\nUnion");

// 1. join()
let arr = ["hola", "mundo"];
let resultado = arr.join(" ");
console.log(resultado);

// 2. reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
let partes = ["hola", "mundo", "!"];
console.log(partes.reduce((acc, curr) => acc + " " + curr)); 

// Interpolacion
console.log("\nInterpolacion");
// `Texto con ${expresion} dentro`
let texto = "hola";
console.log(`${texto} mundo`);

let multilinea = `
linea 1
linea 2
linea 3
`
console.log(multilinea);

// Verificacion
console.log("\nVerificacion");

// 1. datos = typeof
let numero = 40;
console.log(typeof numero);

// 2. null o undefined = `===` or `!==`

let valor = null;
if(valor === null){
    console.log("es null");
}

let undefinido;
if(undefinido === undefined){
    console.log("es undefined");
}

// 3. objetos = in o hasOwnProperty()

let persona = {
    nombre: "ana",
    edad: 25
}
if ("nombre" in persona){
    console.log("nombre existe en el objeto");
}

if (persona.hasOwnProperty("edad")){
    console.log("edad existe en objeto");
}

// 4. cadenas = includes(), indexOf() o test()

let phrase = "hola, mundo!";

if (phrase.includes("mundo")){
    console.log("si contiene mundo");
}

if (phrase.indexOf("mundo") !== -1){
    console.log("si contiene mundo");
}

let regex = /mundo/; // expresiones regulares
if (regex.test(phrase)){
    console.log("si contiene mundo");
}

// 5. booleanos

let num = 1;

if (num){
    console.log("el valor es verdadero");
}else{
    console.log("el valor es falso");
}

console.log(Boolean(num));


/* 
    Ejercicio extra
*/

function palabras(palabra1, palabra2){
    
    // Variables
    let trasfArr = palabra1.toLowerCase().split("").toString();
    let trasfArrRev = trasfArr.reverse();
    let transfArr2 = palabra2.toLowerCase().split("").toString();
    let trasfArrRev2 = transArr2.reverse();
    
    // palindromo
    if ( trasfArr === trasfArrRev){
        console.log(`${palabra1} es un palindromo`);
    }else{
        console.log(`${palabra1} noun palindromo`);
    }
    if ( transfArr2 === trasfArrRev2){
        console.log(`${palabra2} es un palindromo`);
    }else{
        console.log(`${palabra2} noun palindromo`);
    }
    

    // Anagrama

    // Isograma
    



    

    
}

palabras("radar", "roma");
