
/*
export function calcular(Proceso, numUno, numDos){
    const valorInicial = 10;
    return Proceso(numUno, numDos, valorInicial);
}
export function sumar(numUno, numDos, valorInicial){
    return numUno + numDos;
}
export function restar(numUno, numDos){ // podemos simplemente no usar el valor inicial
    return numUno - numDos;
}
calcular(sumar, 1, 2); // 3
calcular(restar, 5, 3); // 2
*/

export function filter(

    arreglo: any[],
    Proceso: (valorActual: any, indice?: number, arreglo?: any[] ) => boolean
    
): any[]{

       const arregloFiltrado = [];

       for(let i = 0; i < arreglo.length; i++ ){

          const respuestaFuncion = Proceso(arreglo[i], i, arreglo, );

          if(respuestaFuncion == true){
             arregloFiltrado.push()
          }
      }
    return arregloFiltrado;
 }













