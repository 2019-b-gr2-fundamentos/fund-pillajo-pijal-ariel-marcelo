// Programa que determine si dos matrices son iguales
// programa que compare dos matrices y determine si estas son iguales 


/*var filas1 = matriz1.length
console.log(filas1);
var filas2 = matriz2.length
console.log(filas2);

var i = 0;
var a = 0;
var b = 0;
do{

    var a = matriz1[i].length;
    var b = matriz2[i + 1].length
    i++;
}while(a == b);

console.log("La matriz tiene todos sus elementos iguales");

*/

var matriz1 = [
    [1,2,3],
    [4,5,6]
]
var matriz2 = [
    [1,2,3],
    [4,5,6]
]

let filasMatriz1 = matriz1.length;
let filasMatriz2 = matriz2.length;
let sonIguales;

if(filasMatriz1 == filasMatriz2){
   for(let i = 0; i < filasMatriz1; i++){
       let columnasMatriz1 = matriz1[i].length;
       let columnasMatriz2 = matriz2[i].length;  
       if(columnasMatriz2 == columnasMatriz1){
       }else{
         sonIguales = false;
       }
   }
   
   


}
// sumar las matrices
//intercambiar las diagonales
/*
function compararMatriz(
    matriz1: number[][],
    matriz2: number[][]
): boolean {

    
    if(matriz1 == matriz2){
        return true;
    }else{
        return false;
    }
}
*/


























