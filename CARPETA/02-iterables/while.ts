
/*

let VecesQueHeComido = 0;

do{
    VecesQueHeComido = 1;
   console.log("Cuanto has comido");

   switch(VecesQueHeComido){
  
     case 1:
        console.log("Desayuno");
     break;

     case 2:
        console.log("Almuerzo");
     break;

     case 3:
        console.log("Merienda");
     break;

     case 4:
        console.log("Gordito");
     break;

   }

} while(VecesQueHeComido <= 4)

*/

/*

1 Analisis Socioeconomico
2 Algebra
3 compiladores
5 Fundamentos de programacion
7 Calculo
11 Fisica
13 Ingles


3)si el numero es  impar -> analisis socioeconomico++
2)si es par -> algebra++
1)si es muñtiplo de 3 -> aumentamos compildores (con el mod si es =! de 0 entonces 
*/

const Deberes = 1000;
let DeberesRealizados = 0;
let AnalisisSoxioeconomico =0;
let Algebra = 0;
let Compiladores = 0;


while(DeberesRealizados < Deberes){

   DeberesRealizados = DeberesRealizados + 1;
   let EsMultiplode3 = DeberesRealizados % 3 == 0;
   let EsNumeroPar = DeberesRealizados % 2 == 0;
   let EsNumeroImpar = DeberesRealizados % 2 != 0;



    if(EsMultiplode3){
  
         Compiladores = Compiladores + 1;
         
    }else if(EsNumeroPar){ //if anidados significa que solo se cumplira uno de estos no ambos
        
         Algebra = Algebra +1;
         

    }else if(EsNumeroImpar){

         AnalisisSoxioeconomico = AnalisisSoxioeconomico + 1;
        

    }


} 



console.log(' Hice ' + AnalisisSoxioeconomico  + '  deberes de Analisis ');
console.log(' Hice ' + Algebra + ' deberes de Algebra');
console.log(' Hice ' + Compiladores + ' deberes de Compiladores ');

//template string