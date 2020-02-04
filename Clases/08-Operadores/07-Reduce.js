"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MiReduce(arreglo, proceso, acumulador) {
    for (var i = 0; i < arreglo.length; i++) {
        var RespuestaReduce = proceso(acumulador, arreglo[i], i, arreglo);
        acumulador = RespuestaReduce;
        if (i == arreglo.length - 1) {
            return acumulador;
        }
    }
}
exports.MiReduce = MiReduce;
