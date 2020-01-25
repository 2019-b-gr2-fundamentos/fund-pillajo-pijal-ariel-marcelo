function log( // en la mayoria de lenguajes log necesitaria definirse primero
    cualquierCosa){ // parametro 
    console.log(cualquierCosa); 
}

log("Hola mundo");

function log(){
    console.log("No hay texto"); // si no existe un parametro igual se ejecutara la funcion 
}


function sumarDosNumeros( // las funciones son contratos con los programadores
    a: number,
    b: number
    ){
    return a + b; 
}

sumarDosNumeros(a,2) // a es un String no un numero

function sumarDosNumeros1( // las funciones son contratos con los programadores
    a: number,    //javascript es un lenguaje no tipado no es necesario definir tipos
    b: number     //pero este acepta el (a,2) por lo cual no es conveniente usarlo
    ): number {   // definimos que la salida debe ser un String y no un number viva TYPTSCRIP
    return "No quiero sumar"; 
}

sumarDosNumeros1(1,2) // a es un String no un numero