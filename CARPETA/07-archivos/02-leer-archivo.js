"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function leerArchivo() {
    console.log('Leer achivo');
    var resultado = fs.readFileSync("./ejemplo.txt", // PATH
    'utf-8' // codificacion 
    );
    console.log(resultado); // Hola amigos
    return resultado;
}
exports.leerArchivo = leerArchivo;
