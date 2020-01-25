


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

const Tareas = 1000;
let DeberesRealizados = 0;
let AnalisisSoxioeconomico =0;
let Algebra = 0;
let Compiladores = 0;
let FundamentosDeProgramacion = 0;
let Calculo = 0;
let Fisica = 0;
let Ingles = 0;


while(DeberesRealizados < Tareas){

   DeberesRealizados = DeberesRealizados + 1;
   let EsMultiplode3 = DeberesRealizados % 3 == 0;
   let EsNumeroPar = DeberesRealizados % 2 == 0;
   let EsNumeroImpar = DeberesRealizados % 2 != 0;
   let EsMultiplode5 = DeberesRealizados % 5 == 0;
   let EsMultiplode7 = DeberesRealizados % 7 == 0;
   let EsMultiplode11 = DeberesRealizados % 11 == 0;
   let EsMultiplode13 = DeberesRealizados % 13 == 0;

   if(EsMultiplode13){

    Ingles = Ingles + 1;

    }else if(EsMultiplode11){

      Fisica = Fisica + 1;

    }else if(EsMultiplode7){

      Calculo = Calculo + 1;

    }else if(EsMultiplode5){

         FundamentosDeProgramacion = FundamentosDeProgramacion + 1;

    }else if(EsMultiplode3){
  
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
console.log(' Hice ' + FundamentosDeProgramacion + ' deberes de Fundamentos de la Programacion');
console.log(' Hice ' + Calculo + ' deberes de Calculo ');
console.log(' Hice ' + Fisica + ' deberes de Fisica ');
console.log(' Hice ' + Ingles + ' deberes de Ingles ');

//template string