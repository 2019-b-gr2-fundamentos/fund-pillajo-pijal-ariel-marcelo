"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _02_leer_archivo_1 = require("./02-leer-archivo");
var _03_Escribir_Archivo_1 = require("./03-Escribir-Archivo");
function main() {
    var TextoLeido = _02_leer_archivo_1.leerArchivo();
    var nuevoContenido = 'Temgo hambre :( \n';
    _03_Escribir_Archivo_1.escribirArchivo('./ejemplo.txt', '');
    console.log(TextoLeido + nuevoContenido);
}
main();
