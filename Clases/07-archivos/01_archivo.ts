import { leerArchivo } from "./02-leer-archivo"
import { escribirArchivo } from "./03-Escribir-Archivo";
import { Estudiante } from "./interfaces/estudiante.interface";
import * as prompts from 'prompts';
// como vamos a trabajar con el prompt que convierte en promesas trabajamos con una funcion asincrona s
async function main(){
let contador = 1;
const contenidoArchivo = leerArchivo(
    './ejemplo.txt'
);
    console.log('contenidoArchivo', contenidoArchivo);
    //const arregloCargadoDeArchivo = JSON.parse('{"nombre":adrian}');
    
let arregloCargadoDeArchivo;

try{
     arregloCargadoDeArchivo = JSON
    .parse(contenidoArchivo);
} catch(error){
    arregloCargadoDeArchivo = [];
    console.error('Error parseado');
}

/*
try{
    
    console.log('1');
    console.log('2');
    console.log('3');
    //Syntaxis herror
    let = 1;
    let = 2;
    console.log(11111111111111111111111111111111111111111111111111111111111111111111111111111122222222222212222222222222222);
    throw new ReferenceError('El Archivo');
    console.log("0"/0);
    //throw new Error("eL archivo esta mal parseado ")
    console.log('4');
    console.log('5');
}catch(error){
    console.log(error)
    console.log(':3');

}
*/

//OPeradores

let minimoId = -1;
arregloCargadoDeArchivo
    .forEach(// No envia nada ni recibe nada
        //Iterar
    
    function(valorActual){ 

        const idActual = valorActual.id;
        if(idActual > minimoId){
            minimoId = idActual
        }

        minimoId = minimoId + 1;
        contador = minimoId;
        
});


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
const indiceEncontrado = arregloEstudiantes.findIndex( // return CONDICION
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
console.log("ASTA");
const EstudianteEncontrado = arregloEstudiantes
    .find(
         function(valorActual){
             console.log(valorActual.nombre)
             console.log(buscar.nombre)
         return valorActual.nombre == buscar.nombre;
        }
    );

    console.log(EstudianteEncontrado);


    const arregloTexto = JSON.stringify(arregloEstudiantes);

    console.log(arregloTexto);

    escribirArchivo(
        './ejemplo.txt',
        arregloTexto
        );




/*

// Parsear -> Texto -> Estructura 


{
    "nombre"
}

<Universidad>
<hkhkf><sdfkdfsjk>

*/


// let arregloCargadoDeArchivo;


try{
    const arregloCargadoDeArchivo = JSON
    .parse( ' Mama ');
} catch(error){
    arregloCargadoDeArchivo = [];
    console.error('Error parseado');
}







  /*  const TextoLeido = leerArchivo();

    const nuevoContenido = 'Temgo hambre :( \n';
    escribirArchivo('./ejemplo.txt','');

    
    console.log(TextoLeido + nuevoContenido);
    */
}

main();
