import * as fs from 'fs';

export  function leerArchivo(PATH): string { 
    console.log('Leer achivo');
    const resultado = fs.readFileSync(
         PATH,
        'utf-8' 
    );

    console.log(resultado); 
    return resultado;
}