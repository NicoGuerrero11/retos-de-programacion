// - - - HERENCIA - - - 

// clase padre
class Animal {
    constructor(nombre){
        this.nombre = nombre;
    }

    emitirSonido(){
        console.log("el animal, emite un sonido");        
    }
}

// clase hijo -perro-
class Perro extends Animal{
    constructor(nombre, raza){
        super(nombre); // le pasamos el nombre del constructor de la clase padre
        this.raza = raza;
    }

    emitirSonido(){
        console.log("El perro ladra");
    }
}

// clase hijo -gato-
class Gato extends Animal {
    constructor(nombre){
        super(nombre);
    }

    emitirSonido(){
        console.log("El gato maulla");
    }
}

const perro = new Perro("Max","labrador");
const gato = new Gato("pepitas");
perro.emitirSonido();
gato.emitirSonido();


// --- extra ---- // 

class Empleado {
    constructor(nombre, identificador){
        this.nombre = nombre;
        this.identificador = identificador;
    }
}

class Gerente extends Empleado{
    constructor(nombre, identificador){
        super(nombre);
        super(identificador);
    }
}

class GerenteProyecto extends Empleado {
    constructor(nombre, identificador){
        super(nombre);
        super(identificador);
    }
}

class Programador extends Empleado{
    constructor(nombre, identificador){
        super(nombre);
        super(identificador);
    }
}


const gerentePrincipal = new Gerente("Marcos", "gerente");
const gerenteSegundo = new GerenteProyecto("Luis", "gerente de proyecto");
const programador = new Programador("nico", "programador");