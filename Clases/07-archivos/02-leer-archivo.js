"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function leerArchivo(path) {
    console.log('Leer achivo');
    var resultado = fs.readFileSync(path, 'utf-8' // codificacion 
    );
    //console.log(resultado); // Hola amigos
    return resultado;
}
exports.leerArchivo = leerArchivo;
