"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function foreach(arregloRecivido, Proceso) {
    for (var i = 0; i < arregloRecivido.length; i++) {
        Proceso(arregloRecivido[i], i, arregloRecivido);
        arregloRecivido[i].l;
    }
}
exports.foreach = foreach;
