"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
function filter(arreglo, Proceso) {
    var arregloFiltrado = [];
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = Proceso(arreglo[i], i, arreglo);
        console.log(arreglo[i]);
        console.log(i);
        if (respuestaFuncion == true) {
            arregloFiltrado.push(arreglo[i]);
        }
    }
    return arregloFiltrado;
}
exports.filter = filter;
