import { leerArchivo } from "./02-leer-archivo"
import { escribirArchivo } from "./03-Escribir-Archivo";

function main(){

    const TextoLeido = leerArchivo();

    const nuevoContenido = 'Temgo hambre :( \n';
    escribirArchivo('./ejemplo.txt','');

    
    console.log(TextoLeido + nuevoContenido);
}

main();