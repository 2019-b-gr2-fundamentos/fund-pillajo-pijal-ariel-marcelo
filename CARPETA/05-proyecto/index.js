"use strict";
exports.__esModule = true;
//Node
//const SumaLibreria = require("ariel-milib/lib/suma");
// importar todo el contenido con el nombre "SumaLibreria"
//del paquete ariel-milib/lib/sum
var SumaLibreria = require("ariel-milib/lib/suma");
var PiLibreria = require("ariel-milib/lib/pi");
var Respuesta = SumaLibreria(1, 2);
console.log("La respuesta es: ", Respuesta);
console.log("La constante pi es:", PiLibreria);
/*
bueno si tenemos varios modul.exports en un archibo
nosotros sustituimos * as ----> {a} donde a es el nombre de uno de los module.exports
*/
