using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EscojeUnPais{

    class ejemplos_switch{

        public static void Main(string[] args){

             String Exam1,Exam2,Asistencia;
             float DiasLaborables = 80,PorcentajeAsis,PromedioExam,PorcentajeExam,PorcentajeAsis;
             Console.WriteLine("Primera Nota calificada sobre 10");
             Exam1 = float.Parse(Console.ReadLine());

             Console.WriteLine("Segunda Nota calificada sobre 10");
             Exam2 = float.Parse(Console.ReadLine());

             Console.WriteLine("Numero de Asistencias");
             Asistencia = float.Parse(Console.ReadLine());
             

             
             PorcentajeAsis = ((100*Asistencia)/DiasLaborables);
             PromedioExam = ( ( (Exam1 + Exam2)/2 ) );
             PorcentajeExam = ( (100*PromedioExam) / 10);

             
             if(PorcentajeExam >= 70 && PorcentajeExam < 100){

               if(PorcentajeAsis >= 80 && PorcentajeAsis <= 100 ){
    
                 Console.WriteLine("Felicidades ha pasado el curso");
                 Console.ReadKey();

               }if(PorcentajeAsis >= 50 && PorcentajeAsis < 80){
    
                 Console.WriteLine("Necesita rendir examenes supletorio");
                 Console.ReadKey();

               }if(PorcentajeAsis >= 0 && PorcentajeAsis < 50){
        
                 Console.WriteLine("Ha reprobado el curso");
                 Console.ReadKey();
 
               }else{

                 Console.WriteLine("Error datos ilogicos");
                 Console.ReadKey();

               }

      
   

            }if(PorcentajeExam >= 55 && PorcentajeExam < 70){

               if(PorcentajeAsis >= 50 && PorcentajeAsis < 100){  

                  Console.WriteLine("Necesita rendir Exames supleorio");
                  Console.ReadKey();

               }if(PorcentajeAsis >= 0 && PorcentajeAsis < 50){

                 console.log("Necesita rendir Exames supleorio");
                 Console.ReadKey();

                }else{

                  console.log("Error datos ilogicos");
                  Console.ReadKey();
                }


            }if(PorcentajeExam >= 0 && PorcentajeExam < 55){

                 console.log("Necesita rendir Exames supleorio");
                 Console.ReadKey();

            }else{
 
                 console.log("Error datos ilogicos");
                 Console.ReadKey();

            }

        } 
    }

}