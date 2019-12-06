/*

1) crear
2) actualizar
3) eliminar
4) salidar
*/
// Funcion para que un arreglo recoora elementos 
function imprimirMensajeNVeces(mensaje, numeroVeces) {
    if (numeroVeces == 0) {
        console.log("Se termino");
    }
    else {
        console.log(mensaje);
        var nuevoNumeroVeces = numeroVeces - 1;
        imprimirMensajeNVeces(mensaje, nuevoNumeroVeces);
    }
}
function main() {
    imprimirMensajeNVeces("hola", 3);
}
main();
/* Forma de Tipar arreglos

const arregloNumeros: number[] = [1, 2, 3];
const arregloString: string[] =  ["a", "b", "c"];
const arregloBoolean: boolean[] = [true, false, false]

*/
var arreglosNumeros = [1, 2, 3] 
function arreglo(arreglosNumeros, indice) {
    if (indice == 2) {
        console.log("Se termino");
    }
    else {
        console.log("en la posicion: " + indice + "tenemos a :" + arreglo[indice]);
        var Nuevoindice = indice + 1;
        arreglo(arreglosNumeros, Nuevoindice);
    }
}
function main() {
    arreglo([3, 2, 1], 0);
}
main();
