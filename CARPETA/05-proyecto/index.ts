//Node
//const SumaLibreria = require("ariel-milib/lib/suma");
// importar todo el contenido con el nombre "SumaLibreria"
//del paquete ariel-milib/lib/suma
import * as  SumaLibreria from  "ariel-milib/lib/suma";
const Respuesta = SumaLibreria(1,2);
console.log("La respuesta es: " , Respuesta);