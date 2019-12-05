/*
Deber 6) Splice 1 elemento Anadir, Splice de 1 elemento borrar 
 
Pseudocodigo
Diagrama de flujo
Programa
*/

// Añadir 
/*
1) tenemos un arreglo de N posiciones
2) tenemos un indice que toma valores de N-1 que tiene una posicion inicial 
3) la posicion que señale el indice debe ser extraida ese dato y guardado en a
4) se guardara en la posicion señalada por el indice un dato guardado en b
5) vector avanza desde la posicion actual sacando el dato y guardandolo en b
6) se guarda el dato de a 
7) repite este proceso hasta el final de cadena dando un arreglo N+1
*/

const  arreglo = [0,1,2,3,4,5] 
let AcomodarDatoEnPosicion:number = 0;
let DatoAGuardar = 0;
let RetenerDato;
let longitud = arreglo.length;


for(let indice = AcomodarDatoEnPosicion; indice <= longitud; indice++){

     if(indice < longitud){
        RetenerDato = arreglo[indice];
        arreglo[indice] = DatoAGuardar;
        DatoAGuardar = RetenerDato;

     }if(indice == longitud){

        arreglo[indice] = DatoAGuardar;
        console.log(arreglo);

     }
}