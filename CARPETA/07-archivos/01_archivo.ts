import { leerArchivo } from "./02-leer-archivo"
import { escribirArchivo } from "./03-Escribir-Archivo";
import { Estudiante } from "./interfaces/estudiante.interface";
import * as prompts from 'prompts';
// como vamos a trabajar con el pompt que convierte en promesas rabajamos con una funcion asincrona
async function main(){

    const arregloEstudiantes: Estudiante[] = [];
    const arregloPreguntas =[
        {
            type: 'text',
            name: 'nombre',
            message: 'Ingresa Nombre'
        }
    ];

    const respuestaEstudiante = prompts(arregloPreguntas);
    console.log(respuestaEstudiante);


















  /*  const TextoLeido = leerArchivo();

    const nuevoContenido = 'Temgo hambre :( \n';
    escribirArchivo('./ejemplo.txt','');

    
    console.log(TextoLeido + nuevoContenido);
    */
}

main();
