"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function miSome(arreglo, Proceso) {
    for (var i = 0; i < arreglo.length; i++) {
        var RespuestaSome = Proceso(arreglo[i], i, arreglo);
        if (RespuestaSome == true) {
            return true;
        }
        else {
            if (i != arreglo.length - 1) {
                return false;
            }
        }
    }
}
exports.miSome = miSome;
