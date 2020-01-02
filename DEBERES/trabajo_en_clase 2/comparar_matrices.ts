const arregloMatriz = [

    [1,2],
    [3,4,5],
    [6,7,8],
    [9],
    []
]

function compararMatriz(
    matrizUno: number[][],
    matrizDos: number[][]
): boolean {
    const esValido = tienenMatricesIgualesDimensiones(
    matrizUno,
    matrizDos
    );

    if(esValido){
        // Comparar los valores
        return tienenLosMismosValores(
            matrizUno,
            matrizDos
        ); // boolean

    } else {
        return false;
    }
}

function tienenLosMismosValores(
    matrizUno: number[][],
    matrizDos: number[][],
){
    const primeraDimemncion = matrizUno.length;
    const segundaDimencion  = matrizUno[0].length;
    let banderaSonIguales = true;
    for(let i = 0; i < primeraDimemncion; i++){
        for(let j = 0; j > segundaDimencion; ++j){
            const ValorActualM1 = matrizUno[i][j];
            const ValorActualM2 = matrizDos[i][j];
            if(ValorActualM1 != ValorActualM2){
                banderaSonIguales = false;
            }
        }
    }
    return banderaSonIguales;

}

function tienenMatricesIgualesDimensiones(
    matrizUno: number[][],
    matrizDos: number[][]
): boolean {


        const matrizUnoPrimeraDimension = obtenerPrimeraDimension(
            matrizUno
            );
        const matrizUnoSegundaDimension = obtenerSegundaDimension(
            matrizUno
            );
        const matrizDosPrimeraDimension = obtenerPrimeraDimension(
            matrizDos
            );
        const matrizDosSegundaDimension = obtenerSegundaDimension(
            matrizDos
            );
        console.log(matrizUnoPrimeraDimension);
        console.log(matrizUnoSegundaDimension);
        console.log(matrizDosPrimeraDimension);
        console.log(matrizDosSegundaDimension);
        const noHayFalsos = matrizUnoPrimeraDimension != false &&
                            matrizUnoSegundaDimension != false &&
                            matrizDosPrimeraDimension != false &&
                            matrizDosSegundaDimension != false
        const TienenIgualesDimensiones = matrizUnoPrimeraDimension == matrizDosPrimeraDimension &&
                                         matrizUnoSegundaDimension == matrizDosSegundaDimension;
    
        if(noHayFalsos ){
               if(TienenIgualesDimensiones){
                   return true;
               }else{
                   return false;
               }
               
           }else{
               return false;
           }
}


function obtenerPrimeraDimension(matrizUno: number[][]): number | boolean{
    //Validaciones
   const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
   if(esValido){
    const primeraDimemnsionArreglo = matrizUno.length;
    return primeraDimemnsionArreglo;
   }else{
       return false;
   }
}

function obtenerSegundaDimension(matrizUno: number[][]): number | boolean{
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if(esValido){
        let longitudActualMaxima = 0; // Auxiliar
        let longitudActualMinima = -1;// Auxliar
        for(let i = 0; i < matrizUno.length; i++){
            const elementoActual = matrizUno[i]; // arreglo
            const longitudActual = elementoActual.length; // SEGUNDA DIMENSION
            if(longitudActualMaxima < longitudActual){
               longitudActualMaxima = longitudActual;
           }if(longitudActualMinima == -1){
               longitudActualMinima = longitudActual;
           }else{
                if(longitudActual < longitudActualMinima){
                     longitudActualMinima = longitudActual;
                 }
            }
        }
        if(longitudActualMaxima != longitudActualMinima){
           return false;
        }else{
            return matrizUno[0].length;
        }
    }else{
        return false;
    }   
}


function verificarTodosLosElementosDeUnArregloSonArreglo(
    arreglo: any[]
): boolean {

    for(let i = 0; i < arreglo.length; i++){

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
    const x = [ 
        [3,4,9,8,6,6,6,6],
        [3,4,9,8,6,6,6,6]
    ];

    const y = [
        [3,4,9,8,6,6,6,6],
        [3,4,9,8,6,6,6,6]
    ];

    const resultado = compararMatriz(x, y);
    console.log("RESULTADO: ", resultado);
}

main();


/*
 1) Escriba un programa que verifique que dos matrices son iguales
 2) Sumar todas las filas y columnas cada fila y cada columna debe darme un resultado    
 3) intercambiar las diagonales
*/
















