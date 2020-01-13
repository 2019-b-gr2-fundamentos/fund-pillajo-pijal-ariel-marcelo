

import  {AnimalPerrito }  from  './interfaces/animal-perrito-interfaces'

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
    clan : null // A cualquier propiedad de la estructura
               // se puede poner "nulo"
    // edad: 4,
    // hijos: nulo,
    // perritas: [],
    // vacunado: falso,
}


import { Duenio } from "./interfaces/duenio.interface";

const duenioPoliPerroAmarillo: Duenio = {

    
    
}

//Guardar datos en una estructura de datos
poliPeroAmarillo.duenio = duenioPoliPerroAmarillo;
poliPerroAmarillo.edad = 4;
poliPerroAmarillo.vacunado = true;

//Acceder a los datos de una estructura de datos

console.log(poliPerroAmarillo.duenio.nombre);






































































