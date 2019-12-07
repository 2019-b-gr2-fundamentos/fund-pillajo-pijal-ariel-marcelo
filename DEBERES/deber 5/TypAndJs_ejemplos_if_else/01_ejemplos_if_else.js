// Escribir 3 ejemplos de switch

///////if
// Pasara el estudiante?
/*  
como pasar el año
El maestro pasara  notas deberes, Asistencia, examenes
todas calificadas sobre 10 y cada una requiere unporcentaje distinto para la aprobacion del estudiante
en el caso de asistencias se contara dichas asistencia y se hara un porcentaje
*/ 

let Exam1String = prompt("La primera nota del Examen es..");
let Exam1 = Number(Exam1String);
let Exam2String = prompt("La segunda nota del Examen es..");
let Exam2 = Number(Exam1String);

let AsistenciaString = prompt("Cuantas asistencias posee..");
let Asistencia = Number(AsistenciaString);

const DiasLaborables = 80;

let PorcentajeAsis = ((100*Asistencia)/DiasLaborables);
let PromedioExam = ( ( (Exam1 + Exam2)/2 ) );
let PorcentajeExam = ( (100*PromedioExam) / 10);

console.log(PorcentajeAsis);
console.log(PorcentajeExam);

if(PorcentajeExam >= 70 && PorcentajeExam < 100){

     if(PorcentajeAsis >= 80 && PorcentajeAsis <= 100 ){
    
        console.log("Felicidades ha pasado el curso");

      }if(PorcentajeAsis >= 50 && PorcentajeAsis < 80){
    
        console.log("Necesita rendir examenes supletorio");

      }if(PorcentajeAsis >= 0 && PorcentajeAsis < 50){
        
        console.log("Ha reprobado el curso");
 
      }else{

        console.log("Error datos ilogicos");

      }

      
   

}if(PorcentajeExam >= 55 && PorcentajeExam < 70){

   if(PorcentajeAsis >= 50 && PorcentajeAsis < 100){  

   console.log("Necesita rendir Exames supleorio");

   }if(PorcentajeAsis >= 0 && PorcentajeAsis < 50){

   console.log("Necesita rendir Exames supleorio");

   }else{

    console.log("Error datos ilogicos");
   }


}if(PorcentajeExam >= 0 && PorcentajeExam < 55){

  console.log("Necesita rendir Exames supleorio");

}else{
 
  console.log("Error datos ilogicos");

}









