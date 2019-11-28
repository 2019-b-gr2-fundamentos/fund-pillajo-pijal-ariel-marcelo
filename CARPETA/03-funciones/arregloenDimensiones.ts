/* cuando definimos arreglos
codemos formarlos de ditintas dimensiones

const arregloDosDimensiones =
[
    [1,2],
    [3,4]
];

arregloDosDimeniones[0][0]//1
arregloDosDimeniones[0][1]//2
arregloDosDimeniones[1][0]//3
arregloDosDimeniones[1][1]//4


basicamente es un arreglo dentro de otro 
pero es necesario que dicho arreglo solo contenga arreglos, o elementos

los llamamos con 
arre
*/

/*
let arregloDosDimensiones =
[
    [1, 2, 3, 4],
    [4, 5, 6, 7]
];
// multiplicar el 0* n elemento +
// multiplicar el 0* + 1 * n - 1
arregloDosDimeniones[0][0]//1
arregloDosDimeniones[0][1]//2
arregloDosDimeniones[1][0]//3
arregloDosDimeniones[1][1]//4

1) definir el tamaño
2) repetir calculo N veces (N = tamaño)
3.1) 1er elemento 1er arreglo
3.2) ultimo elemento del 2 do arreglo
3.3) sumar los elementos

3.4) 1er elemento + 1 = 2do elemeno 1er arreglo
3.5) ultimo elemento - 1 = penultimo del 2do arreglo
3.5) sumar los elemenos 

function productoCruz(vectores: number[][]): number[]{
//return  [0, 0, ] 

}
*/

let matriz =  [
    [0, 1, 2, 3, 4],
    [4, 5, 6, 7, 8]
]; 
let suma = 0;
let longitud = matriz[0].length;
console.log(longitud);

for(let indice = 0; indice < longitud; indice++){

    let valor1 = matriz[0][indice];

    matriz.length = matriz.length - 1;

    let valor2 = matriz[1][matriz.length];

    suma = suma + (valor1 * valor2);

}

console.log("El resultado de tu producto Cruz es: " + suma);





const  matriz =  [
    [0, 1, 2, 3, 4],
    [4, 5, 6, 7, 8]
]; 
let indice2
let  longitud = matriz[0].length;
const no = longitud;
console.log("longitud de " + matriz[0].length);
for(let indice = 0; indice <= longitud; indice++){
indice2 =  matriz[0].length  - indice;
 console.log("sACA EL VALOR " + indice2)
 console.log("yo soy el indice :" + indice);

}

console.log("El resultado de tu producto Cruz es: " + suma);

