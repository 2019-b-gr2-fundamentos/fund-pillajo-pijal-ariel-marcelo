


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

let EsImpar = DeberesRealizados%

 do{

    let EsMultiplosde3 = DeberesRealizados % 3;
    let Espar = DeberesRealizados % 2;
    let Esimpar = Espar != 0;


    if(EsMultiplosde3 != 0){
  
         Compiladores = Compiladores + 1;
         DeberesRealizados = DeberesRealizados + 1;

    }else if(Espar == 0){ //if anidados significa que solo se cumplira uno de estos no ambos
        
         Algebra = Algebra +1;
         DeberesRealizados = DeberesRealizados +1;

    }else if(Esimpar){

         AnalisisSoxioeconomico = AnalisisSoxioeconomico + 1;
         DeberesRealizados = DeberesRealizados + 1;

    }


} while(Deberes <= 1000)

console.log("Analisis soscioeconomico = " + AnalisisSoxioeconomico);

console.log('Hice ${analisis} deberes de Analisis')
//template string