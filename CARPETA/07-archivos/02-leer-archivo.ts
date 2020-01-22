import * as fs from 'fs';

export  function leerArchivo(): string { // asyn convierte en promesa nuestra funcion

    console.log('Leer achivo');
    const resultado = fs.readFileSync(
        "./ejemplo.txt", // PATH
        'utf-8' // codificacion 
    );

    console.log(resultado); // Hola amigos
    return resultado;
}