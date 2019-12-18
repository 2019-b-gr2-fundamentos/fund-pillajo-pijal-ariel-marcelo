// Programa que determine si dos matrices son iguales
// programa que compare dos matrices y determine si estas son iguales 


/*var filas1 = matriz1.length
console.log(filas1);
var filas2 = matriz2.length
console.log(filas2);

var i = 0;
var a = 0;
var b = 0;
do{

    var a = matriz1[i].length;
    var b = matriz2[i + 1].length
    i++;
}while(a == b);

console.log("La matriz tiene todos sus elementos iguales");

*/
/*

var matriz1 = [
    [1,2,3],
    [4,5,6]
]
var matriz2 = [
    [1,2,3],
    [4,5,6]
]

let filasMatriz1 = matriz1.length;
let filasMatriz2 = matriz2.length;
let sonIguales;

if(filasMatriz1 == filasMatriz2){
   for(let i = 0; i < filasMatriz1; i++){
       let columnasMatriz1 = matriz1[i].length;
       let columnasMatriz2 = matriz2[i].length;  
       if(columnasMatriz2 == columnasMatriz1){
       }else{
         sonIguales = false;
       }
   }
   
   


}
*/
// sumar las matrices
//intercambiar las diagonales
/*
function compararMatriz(
    matriz1: number[][],
    matriz2: number[][]
): boolean {

    
    if(matriz1 == matriz2){
        return true;
    }else{
        return false;
    }
}
*/



const arregloMatriz = [

    [1,2],
    [3,4,5],
    [6,7,8],
    [9],
    1
]

function compararMatriz(
    matrizUno: number[][],
    matrizDos: number[][]
): boolean {
return true;
}

function obtenerPrimeraDimension(matrizUno: number[][]): number | false{
    //Validaciones
   const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
   if(esValido){

    const primeraDimemnsionArreglo = matrizUno.length;
    return primeraDimemnsionArreglo;

   }else{
       return false;
   }

}

function obtenerSegundaDimension(matrizUno: number[][]): number | false{
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    let longitudActualMaxima = 0; // Auxiliar
    let longitudActualMinima = -1;// Auxliar
    for(let i = 0; i < matrizUno.length; i++){
        const elementoActual = martrizUno[i]; // arreglo
        const longitudActual = elementoActual.length // SEGUNDA DIMENSION
        if(longitudActualMaxima < longitudActual)
        {
            longitudActualMaxima = longitudActual;

        }
        if(longitudActualMinima == -1)
        {
            longitudActualMinima = longitudActual;
        }else{

            if(longitudActual < longitudActualMinima){
                longitudActualMinima = longitudActual;

            }
        }
    }
    return false;
}


function verificarTodosLosElementosDeUnArregloSonArreglo(
    arreglo: any[]
): boolean {

    for(let i = 0; i < arreglo.length; i++)
    {
        const elementoActual = arreglo[i];
        const esUnArreglo = typeof elementoActual == "object" &&
        elementoActual.indexOf; // truty
        if(!esUnArreglo){
            return false;
        }

    }
    return true;
}

function main(){
    //comparar Matriz()
}

/*

const arregloMatriz = [
    [ 1 , 2 ],
    [ 3 , 4 , 5 ],
    [ 6 , 7 , 8 ]
    [ 9 ]
    1
]



función compararMatriz (
    matrizUno :  número [] [],
    matrizDos :  número [] []
) :  booleano {
 volver  verdadero ;
}

función obtenerPrimeraDimension ( matrizUno :  número [] []) :  número  |  falso {
    // VALIDACIONES
    const esValido =  verificarTodosLosElementosDeUnArregloSonArreglo ( matrizUno );
    if ( esValido ) {
        const primeraDimensionArreglo =  matrizUno . longitud ;
        volver  primeraDimensionArreglo ;
    } más {
        devuelve  falso ;
    }
}

función obtenerSegundaDimension ( matrizUno :  número [] []) :  número  |  falso {
    
}

función verificarTodosLosElementosDeUnArregloSonArreglo (
    arreglo :  any []
) : booleano {
    for ( let i =  0 ; i  <  arreglo . length ; i ++ ) {
        const elementoActual =  arreglo [ i ];
        const esUnArreglo =  typeof  elementoActual  ==  ' objeto '  &&
        elementoActual . indexOf ; // Truty
        if ( ! esUnArreglo ) {
            devuelve  falso ;
        }
    }
    volver  verdadero ;
}


función main () {
    // compararMatriz ()
}




*/







