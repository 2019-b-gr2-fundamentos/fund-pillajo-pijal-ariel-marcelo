import { leerArchivo } from "./02-leer-archivo"
import { escribirArchivo } from "./03-Escribir-Archivo";
import { Estudiante } from "./interfaces/estudiante.interface";
import * as prompts from 'prompts';
// como vamos a trabajar con el pompt que convierte en promesas rabajamos con una funcion asincrona
async function main(){
let contador = 1;
const contenidoArchivo = leerArchivo(
    './ejemplo.txt'
);
    console.log('contenidoArchivo', contenidoArchivo);
    const arregloCargadoDeArchivo = JSON.parse(contenidoArchivo);
    const arregloEstudiantes: Estudiante[] = arregloCargadoDeArchivo;
    const arregloPreguntas =[
        {
            type: 'text',
            name: 'nombre',
            message: 'Ingresa Nombre'
        }
    ];

    const respuestaEstudiante = await  prompts(arregloPreguntas);
    
    

   const NuevoRegistro = {
       id: contador,
       nombre: respuestaEstudiante.nombre
   };

   contador = contador + 1;
   arregloEstudiantes.push(NuevoRegistro);

   const respuestaEstudianteDos = await prompts(arregloPreguntas);

   const NuevoRegistroUno = {
    id: contador,
    nombre: respuestaEstudianteDos.nombre
};
contador = contador + 1;
arregloEstudiantes.push(NuevoRegistroUno);




console.log('Cual usuario quieres editar?');
console.log(arregloEstudiantes);

// Operadores !!! --> Reemplazar al !For
const idABuscar = await prompts(
    {
        type: 'number',
        name: 'id',
        message: 'ingresa el identificado del registro editar'
    }
)

// esta funcion  acepta otra funcion como dato de entrada
const indiceEncontrado = arregloEstudiantes.findIndex( // return CONICION
     function(valorActual, indice, arreglo){


         console.log(valorActual);
         console.log(indice);
         console.log(arreglo);
         return valorActual.id == idABuscar.id; // No devuelbe el indice
     } // si encuentra devuelve el indice
)      // no encuentra

console.log('Indice encontrado', indiceEncontrado);

const nombreEditar = await prompts(
    {
        type: 'text',
        name: 'nombre',
        message: 'Ingresa el nuevo NOmbre'
    }
);

arregloEstudiantes[indiceEncontrado].nombre = nombreEditar.nombre;
console.log(arregloEstudiantes);

const buscar = await prompts(
    {
        type: 'text',
        name: 'nombre',
        message: 'Buscar por ID o por nombre'
    }
);

const EstudianteEncontrado = arregloEstudiantes
    .find(
         function(valorActual){
             console.log(valorActual.nombre)
             console.log(buscar.nombre)
         return valorActual.nombre == buscar.nombre;
        }
    );

    console.log(EstudianteEncontrado);









  /*  const TextoLeido = leerArchivo();

    const nuevoContenido = 'Temgo hambre :( \n';
    escribirArchivo('./ejemplo.txt','');

    
    console.log(TextoLeido + nuevoContenido);
    */
}

main().then().catch();
