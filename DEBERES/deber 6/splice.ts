/*
Deber 6) Splice 1 elemento Anadir, Splice de 1 elemento borrar 
 
Pseudocodigo
Diagrama de flujo
Programa
*/

// Añadir 
/*
1) tenemos un arreglo1 de N posiciones
2) tenemos un indice que toma valores de N-1 que tiene una posicion inicial 
3) la posicion que señale el indice debe ser extraida ese dato y guardado en a
4) se guardara en la posicion señalada por el indice un dato guardado en b
5) vector avanza desde la posicion actual sacando el dato y guardandolo en b
6) se guarda el dato de a 
7) repite este proceso hasta el final de cadena dando un arreglo1 N+1
*/

const arreglo2 = [0,1,2,3,4,5]; 
let BorrarePosicion:number = 0;
let DatoAGuardar = 0;
let RetenerDato;
let longitud = arreglo2.length;


for(let indice = BorrarePosicion; indice <= longitud; indice++){

     if(indice < longitud){
        RetenerDato = arreglo2[indice];
        arreglo2[indice] = DatoAGuardar;
        DatoAGuardar = RetenerDato;

     }if(indice == longitud){

        arreglo2[indice] = DatoAGuardar;
        console.log(arreglo2);

     }
}

// Borrar

const  arreglo1 = [0,1,2,3,4,5] 
let arregloPrin;
let PosicionABorrar:number = 0;
let indice1 = PosicionABorrar;
let Tamaño = arreglo1.length;
let Remplazar; 
let indice2;
if(PosicionABorrar >= Tamaño || PosicionABorrar <  0){
    
    console.log(arreglo1
        + "\n " + " Recuerde que las posiciones se cuenten desde el 0" );

}else{

     for(indice2 = PosicionABorrar + 1; indice2 < Tamaño; indice2++ ){

      let ultimaPosicion = arreglo1[indice2];

        if(ultimaPosicion){

         Remplazar = arreglo1[indice2];
         arreglo1[indice1] = Remplazar;
         indice1++;


        }
     }

     arregloPrin  = arreglo1.splice(0,indice1);

     console.log(arregloPrin);
            
}










