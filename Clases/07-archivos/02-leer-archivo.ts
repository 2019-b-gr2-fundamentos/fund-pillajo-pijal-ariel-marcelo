import * as fs from 'fs';

export  function leerArchivo( path: string): string { // asyn convierte en promesa nuestra funcion

    console.log('Leer achivo');
    
    let resultado = fs.readFileSync(
        path,     
       'utf-8' // codificacion 
    );

    //console.log(resultado); // Hola amigos
    return resultado;
}