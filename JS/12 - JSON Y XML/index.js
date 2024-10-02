

// datos de persona

let persona = {
    nombre : "nicolas",
    edad : "24",
    fechaNacimiento : "08/08/200",
    lenguajes : "python, js, c++"
};

// convertir tipo de dato a JSON

const jsonString = JSON.stringify(persona);
console.log(jsonString);


persona = null;
console.log(persona);

