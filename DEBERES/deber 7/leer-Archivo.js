"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function leerArchivo(PATH) {
    console.log('Leer achivo');
    var resultado = fs.readFileSync(PATH, 'utf-8');
    console.log(resultado);
    return resultado;
}
exports.leerArchivo = leerArchivo;
