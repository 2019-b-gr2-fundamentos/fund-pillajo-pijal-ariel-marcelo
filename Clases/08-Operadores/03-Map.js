"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function map(arregloOriginal, //Reviso el original
Proceso) {
    var nuevoArrglo = [];
    var arreglo = __spreadArrays(arregloOriginal); // le hago un clon 
    for (var i = 0; i < arreglo.length; i++) {
        var clon = __spreadArrays(arreglo); // Crear clon
        var respuestaFuncion = Proceso(clon[i], i, clon);
        nuevoArrglo.push(respuestaFuncion);
    }
    return nuevoArrglo;
}
exports.map = map;
