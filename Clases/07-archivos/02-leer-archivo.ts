import * as fs from 'fs';

export  function leerArchivo(): string { // asyn convierte en promesa nuestra funcion

    console.log('Leer achivo');
    let resultado = fs.readFileSync(
        "./ejemplo.txt",
        Path2D,     
       'utf-8' // codificacion 
    );

    //console.log(resultado); // Hola amigos
    return resultado;
}