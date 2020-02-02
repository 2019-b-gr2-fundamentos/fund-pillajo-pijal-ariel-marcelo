import { leerArchivo } from "./02-leer-archivo"
import { Estudiante } from "./interfaces/estudiante.interface";
import * as prompts from 'prompts';
import { escribirArchivo } from "./03-Escribir-Archivo";


// * Este programa lee un archivio .txt y lo Parsea, se le añade a un arreglo 
// y despues pide datos que seran agregados al mismo arreglo


// PARSEAR --> TEXTO --> Estructura en memoria 

/*
    const arregloCargadoDeArchivo = JSON.parse('{"nombre":"adrian"}');  // Esta es la manera correcta de
                                                //  escribir una estructura en texto para luego parsearla
    console.log('contenidoArchivo', arregloCargadoDeArchivo );
*/
    
/*
// se identifica como tipo texto
{
    "nombre": "Ariel"
}

// otro tipo seria el siguiente 
<universidad>
   <facultad></facultad>
</universidad>

*/

// como vamos a trabajar con el prompt que convierte en promesas trabajamos 
//con una funcion asincrona 

async function main(){

let contador = 1;

const contenidoArchivo = leerArchivo( './ejemplo.txt');

    console.log('contenidoArchivo', contenidoArchivo);

let arregloCargadoDeArchivo;

try{
     arregloCargadoDeArchivo = JSON
    .parse(contenidoArchivo);
} catch(error){
    arregloCargadoDeArchivo = [];
    console.error('Error parseado');
}

    console.log('nuevo arreglo parseado', arregloCargadoDeArchivo); 

/* Aqui podemos definir un arrglo en caso de que no se logre parsear el 
   achivo .txt en un archivo JSON 

try{
       arregloCargadoDeArchivo = JSON.parse(contenidoArchivo);

   }catch(error){

      arregloCargadoDeArchivo = [
          {"id":1, "nombre":"Juanito"},
          {"id":2, "nombre":"Pepito"}
       ];

      console.error('Error parseado archivo');   
   }
*/  

    const arregloEstudiantes: Estudiante[] = arregloCargadoDeArchivo;

    const arregloPreguntas =[
        {
            name: 'nombre',
            type: 'text',
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

     arregloEstudiantes.push(NuevoRegistroUno);

     console.log('Arreglo Estudiantes', arregloEstudiantes);
    
/* Algunos errores en javascript donde trow new NombreDelError nos ayudara
   a indicar al uuario que error esta sucediendo 

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

// Ahora vamos a sobreescribir algun dato del arreglo

console.log('Cual usuario quieres editar?');
console.log(arregloEstudiantes);

// Operadores !!! --> Reemplazar al !For

let minimoId = -1;

arregloCargadoDeArchivo.forEach(// No envia nada ni recibe nada
                                // Iterar (repetir un proceso varias veces has alcanzar la meta)
    function(valorActual){ 
        
        const idActual = valorActual.id;
        if(idActual > minimoId){
            minimoId = idActual
    }
    minimoId = minimoId + 1;
    contador = minimoId;
    }
);


const idABuscar = await prompts(
    {
        type: 'number',
        name: 'id',
        message: 'ingresa el identificado del registro editar'
    }
)

// esta funcion  acepta otra funcion como dato de entrada
//  Remplaza al for 

const indiceEncontrado = arregloEstudiantes.findIndex( // return CONDICION

     function(valorActual, indice, arreglo){

         console.log(valorActual);
         console.log(indice);
         console.log(arreglo);

         return valorActual.id == idABuscar.id; // No devueve el indice

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

const EstudianteEncontrado = arregloEstudiantes.find(
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

   const TextoLeido = leerArchivo('./ejemplo.txt');
    
    //Simplmente deficne otro texto
    const nuevoContenido = 'Temgo hambre :( \n';
    
    //Aqui esta borrando el archivo del ejemplo.txt
    escribirArchivo('./ejemplo.txt','');

    // como el texto ya se guardo en ambas variables antes de porrarse del
    // ejemplo txt, entonces se impriomira el contenido del archivo 

    console.log(TextoLeido + nuevoContenido);

/* Se ejecuta directamente catch ya que Mama es un texto

try{
    const arregloCargadoDeArchivo = JSON
    .parse( ' Mama ');
} catch(error){
    arregloCargadoDeArchivo = [];
    console.error('Error parseado');
}

*/   
}
main();
