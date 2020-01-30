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


if(casado =! false){ // (expresion) => boolean
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


//TRUTY
const nombreVacio = "";

if(""){

  console.log("Truty");// Truty       
}else{
    console.log("Falsy");  

}

//FALSY


if("abc"){

    console.log("Truty");     
  }else{
      console.log("Falsy");  
  
  }
  

// Truty 


  if(-1,032){

    console.log("Truty");     
  }else{
      console.log("Falsy");  
  
  }


//FALSY

const  nombreVacio = 0;
if(null){

    console.log("Truty");     
  }else{
      console.log("Falsy");  
  
  }



//FALSY

const  nombreVacio = 0;
if(null){

    console.log("Truty");     
  }else{
      console.log("Falsy");  
  
  }

//FALSY

  if(undefined){

    console.log("Truty");     
  }else{
      console.log("Falsy");  
  
  }




const calculo = "sumar"; // sumar restar multiplicar dividir
switch(calculo){
    case "sumar"
    //code 
    break; // es para dejar de comparar los distintos casos ya que si llego ahi significa q ya encontro lo que buscaba

    case "restar"
    //code
    break;
    case "multiplicar"
    //code
    break;
    case "dividir"
    //code
    break;

    default:// para dejar de comparar cualquier otra cosa
}





const añosString = prompt("Ingrese un numero se convertira a entero");
const años = parseInt(añosString);

if(años <= 6){
    console.log("GUAGUA");
} if(años <= 18 && años > 6){
    console.log("GUAMBRA");
} if(años > 18 && años <= 65){
    console.log("LONGO");
} if (años > 65 && años <= 110){
    console.log("RUCO");   
}if(años > 110){
    console.log("No puede ser tan viejo!!!" )
}if(años < 0){
    console.log("Que, ¿cada año te  haces mas joven? NUMEROS POSITIVOS");
}
























