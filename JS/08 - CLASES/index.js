// clases

class Persona{
    constructor(nombre){
        this.nombre = nombre;
    }

    saludar(){
        return `mucho gusto ${this.nombre}`;
    }

}

const persona = new Persona("nicolas");
console.log(persona.saludar());

// pila  LIFO

class Stack{
    constructor(){
        this.items = [];
    }
    agregar(item){
        this.items.push(item);
    }
    eliminar(){
        return this.items.pop();
    }
    mostrarElementos(){
        if(this.items.length === 0){
            return `esta vacio`;
        }else{
            return this.items.length
        }
    }

    imprimir(){
        return this.items
    }

}

const pila = new Stack();
pila.agregar(1);
pila.agregar(2);
pila.agregar(3);
pila.agregar(4);
console.log(pila.imprimir());
console.log(pila.mostrarElementos());
pila.eliminar();
console.log(pila.imprimir());

// cola    FIFO

class Cola{
    constructor(){
        this.items = []; 
    }

    agregar(item){
        this.items.push(item);
    }

    eliminar(){
        return this.items.shift();
    }


    show(){
        if(this.items.length === 0){
            return `esta vacio`;
        }else{
            return this.items.length
        }
    }

    print(){
        return this.items
    }


}


const cola = new Cola();
cola.agregar(1);
cola.agregar(2);
cola.agregar(3);
cola.agregar(4);
console.log(cola.print());
console.log(cola.show());
cola.eliminar();
console.log(cola.print());
