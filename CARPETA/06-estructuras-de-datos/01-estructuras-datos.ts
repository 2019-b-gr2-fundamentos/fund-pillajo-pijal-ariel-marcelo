
import { Duenio } from "./interfaces/duenio.interface";
import  {AnimalPerrito }  from  './interfaces/animal-perrito-interfaces'
//  ./ --> Relativo a donde esta el archivo
// si no tiene esta notacion al inicio, busca en los note-mojos donde estan nuestras dependencias




// booleano
// cuerda
// nulo -> objeto
// número
// PERSONA


// CASI EN TODOS LOS LENGUAJES
// Estructura -> Estructura de datos
// Clase -> Estructura de datos -> Metodos!

// ANIMAL -> nombre cientifico, color principal
// fecha nacimiento, peso, genero, altura 
const  edad  =  20 ;
const  ejemploEstructura  =  {
    'nombreCientifico' : 'canis lupus familiaris' ,
    "llave" : "valor" ,    
    enojo : undefined ,
    edadActual : edad ,  // variables
    noEsNecesario : true,  // ultima coma ok
}

ejemploEstructura
// Estructura de datos en lenguaje NO TIPADO
const  poliPerro  =  {
    nombreCientifico : 'Canis Lupus Familiaris' ,
    nombre : 'Grandote' ,
    clan : 'Poliperro' ,
    edad : 10 ,
    hijos : null,
    perritas : [ 'Manuela' ,  'Zoraida' ] ,
    vacunado : true,
}
console.log(poliPerro.nombre) ;  // Canis Lupus Familiaris

// Estructura de datos en lenguaje TIPADO
const  poliPerroAmarillo : AnimalPerrito  =  {
    nombreCientifico : 'Canis Lupus Familiaris' ,
    nombre : 'Amarillo' ,
    clan : null, // A cualquier propiedad de la estructura
                 // se puede poner "nulo"
    //edad: 4,
    // hijos: nulo,
    // perritas: [],
    // vacunado: falso,
}

poliPerroAmarillo


const dueniopoliPerroAmarillo: Duenio = {

    // Al usar Ctrl + Space , sabemos que datos son oligatorios a llenar
    nombres: "Ariel",
    apellidos: "Pillajo",
    fechaNacimiento: 2,
    mascotasPerros: [ poliPerroAmarillo ]
    
}

// Guardar datos en una estructura de datos

poliPerroAmarillo.duenio = dueniopoliPerroAmarillo;
poliPerroAmarillo.edad = 4;
poliPerroAmarillo.vacunado = true;

// Accerdera los datos de la estructura 

console.log(poliPerroAmarillo.duenio.nombres);
console.log(poliPerroAmarillo.duenio.apellidos);
console.log(poliPerroAmarillo.nombre);
console.log(poliPerroAmarillo.edad);































































