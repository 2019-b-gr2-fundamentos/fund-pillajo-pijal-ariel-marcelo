//Node
//const SumaLibreria = require("ariel-milib/lib/suma");
// importar todo el contenido con el nombre "SumaLibreria"
//del paquete ariel-milib/lib/sum
import * as  SumaLibreria from  "ariel-milib/lib/suma";
import * as  PiLibreria from  "ariel-milib/lib/pi";


const Respuesta = SumaLibreria(1,2);
console.log("La respuesta es: " , Respuesta);
console.log("La constante pi es:" , PiLibreria);




/*
bueno si tenemos varios modul.exports en un archibo
nosotros sustituimos * as ----> {a} donde a es el nombre de uno de los module.exports
*/

