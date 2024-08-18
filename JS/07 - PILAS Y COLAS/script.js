
/* 
    estructura de una pila usando objeto como estructura
*/

class Stack  {
    constructor(){
        this.items = [];
    }
    push(item){
        this.items.push(item);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
}

// console.log("\nPilas: ");
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.items);
// console.log(`Ultimo elemento: ${stack.peek()}`);
// stack.pop();
// console.log("LIFO - Stacks");
// console.log(stack.items);
// console.log(`Ultimo elemento: ${stack.peek()}`);



/* 
    estructura de una cola usando objeto como estructura
*/

// const queue = {
//     items: [],
//     enqueue(item){
//         this.items.push(item);
//     },
//     dequeue(){
//         return this.items.shift();
//     },
//     peek(){
//         return this.items[0];
//     },
//     isEmpty(){
//         return this.items.length === 0;
//     }
// };

// console.log("\n\nColas:");
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.items);
// console.log(`primer elemento: ${queue.peek()}`);
// queue.dequeue();
// console.log("FIFO - colas");
// console.log(queue.items);
// console.log(`primer elemento: ${queue.peek()}`);

/* Ejercicio extra */

class NavegadorWeb {
    constructor() {
      this.historial = new Stack();
      this.paginaActual = null;
    }
  
    navegar(url) {
      if (this.paginaActual) {
        this.historial.push(this.paginaActual);
      }
      this.paginaActual = url;
    }
  
    adelante() {
      if (!this.historial.isEmpty()) {
        this.paginaActual = this.historial.pop();
      }
    }
  
    atras() {
      if (!this.historial.isEmpty()) {
        const aux = this.historial.pop();
        this.paginaActual = this.historial.pop();
        this.historial.push(aux);
      }
    }
  
    mostrarPaginaActual() {
      console.log(`Página actual: ${this.paginaActual}`);
    }
}
  
const navegador = new NavegadorWeb();
  
navegador.navegar("www.google.com");
navegador.navegar("www.youtube.com");
navegador.navegar("www.facebook.com");
  
navegador.mostrarPaginaActual(); // Salida: Página actual: www.facebook.com
  
navegador.atras();
  
navegador.mostrarPaginaActual(); // Salida: Página actual: www.youtube.com
  
navegador.adelante();
  
navegador.mostrarPaginaActual(); // Salida: Página actual: www.facebook.com
  
  
  
// Impresora Compartida
  
  
// class Impresora {
//     constructor() {
//       this.colaImpresion = new queue();
//     }
  
//     imprimir() {
//       if (!this.colaImpresion.isEmpty()) {
//         console.log(`Imprimiendo documento: ${this.colaImpresion.dequeue()}`);
//       }
//     }
  
//     agregarDocumento(nombreDocumento) {
//       this.colaImpresion.queue(nombreDocumento);
//     }
// }
  
// const impresora = new Impresora();
  
// impresora.agregarDocumento("documento1.pdf");
// impresora.agregarDocumento("documento2.docx");
// impresora.agregarDocumento("documento3.jpg");
  
  
// // Ejemplo de uso
  
// while (true) {
//     //const comando = prompt("Introduzca comando (imprimir, nombre_documento): ");
  
//     if (comando === "imprimir") {
//       impresora.imprimir();
//     } else {
//       impresora.agregarDocumento(comando);
//     }
// }