// 04-condicionales.ts
const casado = true;
if (casado == true){
    console.log("Si estoy casado");
}else{
    console.log("No estoy casado");
}




if (casado == true){ // (expresion) => boolean
    console.log("No estoy casado");
}else{
    console.log("Si estoy casado");
}




if (casado != true){ // (expresion) => boolean
    console.log("No estoy casado");
}else{
    console.log("Si estoy casado");
}


if (casado != false){ // (expresion) => boolean
    console.log("Si estoy casado");
}else{
    console.log("No estoy casado");
}


const TengoMosa = false;
const CasadoyMosero = casado == true && TengoMosa == true;
const estaCasado = true; // expresion

if (CasadoyMosero){ 
    console.log("Casado y Mosero");
}else{
    console.log("O casado o Mosero o Nada");
}

//AND -> && en java y en python AND -> AND 
// true y true   = true
// true y false  = false
// true y false  = false
// false y false = false

// OR -> || PIPES
// True  y true = true
// True  y true = true
// True  y true = true
// false y false = false


// apago la primera alarma 
// me hago bolta y lloro hasta la segunda
// alarma y me levanto
// celularDescargado == true
// celularDañado == true
// amaneceMuerto == true
// AlarmaActivada != true
// ModoSilencio == true

//const seAtrasoAClase =  celularDescargado == true || celularDañado == true || amaneceMuerto == true || AlarmaActivada != true || ModoSilencio == true;


const seAtrasoAClase =  celularDescargado == true || celularDañado == true || amaneceMuerto == true || AlarmaActivada != true || ModoSilencio == true;

if(seAtrasoAClase){
    console.log("Se ha atrasado  favor de  repetir el año");
}else{
    console.log("A llegado a tiempo Congratulations");
}



// elegimos una operacion a realizar
// elegimosSuma == true
// elegimosResta == true
// elegimosMultiplicacion == true
// elegimosDivision == true
// imprimir en pantalla
// fin del programa























