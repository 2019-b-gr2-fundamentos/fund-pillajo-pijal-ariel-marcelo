function sumar(numUno: number, numDOS:number): number{

return numUno + numDOS;
}
function restar(numUno:number, numDOS:number): number{

    return numUno - numDOS;

}
function multiplicar(numUno: number, numDOS:number): number{

   return numUno * numDOS

}
function dividir(numUno:number, numDOS:number): number{
  
   return numUno / numDOS;

}



//  MAIN SE REFRIERE A UNA FUNCON PRINCIPAL
function main(){
    
     main();

}

function calculadora(){

    const operacion:string  = prompt("Selecciona una operacion: ´Suma - 1´, ¨Resta-2¨, ¨Multilicacion-3¨ , ´Division-4´ y ¨Terminamos-5¨" );

    const esSuma:boolean = operacion  == "suma"||
    operacion == "1" ||
    operacion == "Suma - 1";

    const esResta:boolean = operacion  == "resta "||
    operacion == "2" ||
    operacion == "Resta-2";

    const esMultiplicacion:boolean = operacion  == "multiplicacion"||
    operacion == "3" ||
    operacion == "Multilicacion-3";

    const esDivision:boolean = operacion  == "division "||
    operacion == "4" ||
    operacion == "Division-1";

    const seTermino:boolean = operacion == "terminamos"||
    operacion == "5"||
    operacion == "terminamos-5";
  
  
   const estaValido:boolean = esSuma || esResta || esMultiplicacion || esDivision || seTermino

   if(estaValido){

    const numUno:number = +prompt("Numero 1");
    const numDos:number = +prompt("Numero 2");
    let resultado = 0;

    if(esSuma){
       resultado = sumar(numUno, numDos);

    }if(esResta){

        resultado = restar(numUno, numDos);

    }if(esMultiplicacion){

        resultado = multiplicar(numUno, numDos);

    }if(esDivision){

        resultado = dividir(numUno, numDos);

    }else{

        if(seTermino){

            console.log("se Termino :)");
        }else{
            calculadora();
        }
    }


   }



}


/*
1) Seleccionar operacion
2.1) La seleccion no es VALIDA
    2.1.1) Vuelve a seleccionar la operacion 
2.2) La seleccion es VALIDA
    2.2.1) Ingresar primer numero
    2.2.2) Ingresar segundo numero
    2.2.3) Ejecutar la operacion
 
*/