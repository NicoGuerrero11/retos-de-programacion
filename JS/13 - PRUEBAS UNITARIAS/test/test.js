import { strict as assert } from 'assert';
import * as main from '../main.js'; // Asegúrate de que `main.js` tenga la extensión .js
import { expect } from 'chai';
import {persona} from '../persona.js';

//resultado
const suma = main.sumaNum(5,4);
const suma2 = main.sumaNum(7, 2);
const resta = main.restaNum(10,5);
const resta2 = main.restaNum(6,2);

describe('matematicas', function(){
   describe('suma()',function(){
        it('deberia de dar 9 la suma de 5 y 4', function(){
            assert.strictEqual(suma, 9);
        })
        it('deberia de dar 9, la suma de 7 y 2', function(){
            assert.strictEqual(suma2, 9);
        })
   })
   describe('resta()', function(){
    it('deberia de dar 5 la resta de 10 y 5', function(){
        assert.strictEqual(resta, 5);
    })
    it('deberia de dar 4, la suma de 6 y 2', function(){
        assert.strictEqual(resta2, 4);
    })
   })
    
})


// extra

describe('Prueba del objeto persona', function(){
    describe('campos()',function(){

        it('deberia de tener una propiedad (name)', function(){
            expect(persona).to.have.property('name');
        });

        it('deberia de tener una propiedad (age)', function(){
            expect(persona).to.have.property('age');
        });

        it('deberia de tener una propiedad (birth Date)', function(){
            expect(persona).to.have.property('birthDate');
        });

        it('deberia de tener una propiedad (programing lenguages)', function(){
            expect(persona).to.have.property('programmingLenguages');
        });
    });

    describe('Datos()',function(){
        it('deberia de tener el dato de "nicolas"',function(){
            expect(persona.name).to.equal('nicolas');
        }); 

        it('deberia de tener el dato de "22"',function(){
            expect(persona.age).to.equal(22);
        });

        it('deberia de tener el dato de "08/08/200"',function(){
            expect(persona.birthDate).to.equal('08/08/2000');
        });

        it('programming lenguage debe ser un arreglo',function(){
            expect(persona.programmingLenguages).to.be.an('array');
        });

        it('programming lenguage debe de tener python', function(){
            expect(persona.programmingLenguages).to.include('python');
        });
        it('programming lenguage debe de tener JS', function(){
            expect(persona.programmingLenguages).to.include('JS');
        });
        it('programming lenguage debe de tener java', function(){
            expect(persona.programmingLenguages).to.include('Java');
        });
    });
});