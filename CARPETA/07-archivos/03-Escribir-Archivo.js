"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function escribirArchivo(path, contenido) {
    fs.writeFileSync(path, // PATH
    contenido, // contenido
    'utf8' // Codificacion 
    );
}
exports.escribirArchivo = escribirArchivo;
