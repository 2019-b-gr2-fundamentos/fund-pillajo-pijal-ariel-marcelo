"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MiEvery(arreglo, proceso) {
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaEvery = proceso(arreglo[i], i, arreglo);
        if (respuestaEvery == false) {
            return false;
        }
        else {
            if (i == arreglo.length - 1) {
                return false;
            }
        }
    }
}
exports.MiEvery = MiEvery;
