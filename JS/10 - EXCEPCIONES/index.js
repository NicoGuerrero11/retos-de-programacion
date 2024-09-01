
// manejo de errores
/* 
try {
  // código que puede arrojar un error
} catch (err) {
  // código a ejecutar si se produce un error
} finally {
  // código que se ejecutará independientemente de que se produzca un error o no
}
*/

/* const arr = [1,2,3,4,5];
try{
    arr[10].length;
}catch(err){
    throw 'no puedes acceder a una posicion que no existe en el array ' + err;
}finally{
    console.log(`el array tiene una longitud maxima de: ${arr.length}`);
} */

/* extra extra */

const errores = (par1, par2) => {
    try{
        if (par1 < par2){
            throw `${par1} no puede ser menor que ${par2}`;
        }
        if (par1 == par2){
            throw `${par1} no puede ser igual que ${par2}, tiene que haber un numero mas grande`;
        }
        if (par2 == undefined){
            throw 'ambos valores tienen que ser un numero';
        }
    }
    catch(err){
        console.log(err);
    }finally{
        console.log(par1 - par2);
        console.log('ejecucion finalizada');
    }
}

errores(5, 20);