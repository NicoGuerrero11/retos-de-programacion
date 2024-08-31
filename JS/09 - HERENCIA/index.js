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
    constructor(nombre, id){
        this.nombre = nombre;
        this.id = id;
        this.empleados = [];
    }
    add(empleado){
        this.empleados.push(empleado);
    }

    mostrarEmpleado(){
        for(let empleado of this.empleados){
            console.log(empleado);
        }
    }
}

class Gerente extends Empleado{
    coordinar_proyectos(){
        console.log(`${this.nombre} esta coordinando proyectos`);
    }
}

class GerenteProyecto extends Empleado {
    constructor(nombre, id, proyecto){
        super(nombre, id);
        this.proyecto = proyecto;
    }

    coordinar_proyecto(){
        console.log(`${this.nombre} esta coordinando un proyecto`);
    }
}

class Programador extends Empleado{
    constructor(nombre, id,lenguaje){
        super(nombre, id);
        this.lenguaje = lenguaje;
    }

    code(){
        console.log(`${this.nombre} esta programando en el lenguje: ${this.lenguaje}`);
    }

    add(employee = Empleado){
        console.log(`un programador no tiene empleados, ${employee.nombre} no se agregara`);
    }

    mostrarEmpleado(){
        console.log("los programadores, no cuentan con empleados");
    }
}

my_manager = new Gerente("Nico", 1);
my_proyect_manager = new GerenteProyecto("Luis", 2, "proyecto 1");
my_proyect_manager2 = new GerenteProyecto("Marco", 3, "proyecto 2");
my_programmer = new Programador("seba", 4, "python");
my_programmer2 = new Programador("Javier", 5, "JavaScript");
my_programmer3 = new Programador("Marce", 6, "C++");
my_programmer4 = new Programador("Jose", 7, "Java");

my_manager.add(my_proyect_manager);
my_manager.add(my_proyect_manager2);

my_proyect_manager.add(my_programmer);
my_proyect_manager.add(my_programmer2);
my_proyect_manager2.add(my_programmer3);
my_proyect_manager2.add(my_programmer4);

my_programmer.add(my_programmer2);

my_programmer.code();
my_proyect_manager.coordinar_proyecto();
my_manager.coordinar_proyectos();

my_manager.mostrarEmpleado();
my_proyect_manager.mostrarEmpleado();
my_programmer.mostrarEmpleado();