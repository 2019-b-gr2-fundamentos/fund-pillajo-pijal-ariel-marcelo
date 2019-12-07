


///////switch
// cuanto tiempo libre tiene un politecnico


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EscojeUnPais{

    class ejemplos_switch{

        public static void Main(string[] args){

        int Tiempo,Materias,Sueño;
        int UnDia = 24;
        int EstudioAutonomo = 4;
        int UnDia = 24;
        int HorasxDia = 2;
        int DiasLaborables = 3;
        int EstudioAutonomo = 4;
        int HorasLibres = 0;

        Console.WriteLine("Este programa tiene en cuenta que el estudiante\n" + 
        "\nnecesita 4 horas de estudio a la semana" +
        "\npor materia y que ademas,  cada materia" + 
        "\nal menos 3 dias a la semana" +
        "\nEscoja un numero de la siguiente lista" + 
        "\n1.-semana" +
        "\n2.-mes\n"
         );
         
        Tiempo = Console.ReadLine();

        Console.WriteLine("Cuantas materias tienes");
        Materias = Int16(Console.WriteLine());
        
        Console.WriteLine("Cuantas horas de sueño necesitas normalmente??");
        Sueño = Int16(Console.WriteLine());

         switch(Tiempo){
             case "1":

                float semana = 7;
                HorasLibres = semana * UnDia;
                EstudioAutonomo = EstudioAutonomo * Materias;
                Materias = Materias * DiasLaborables;
                Materias = Materias * HorasxDia;
                Sueño = Sueño * semana;
                HorasLibres = (((HorasLibres - Sueño) - Materias) - EstudioAutonomo);  
                if(HorasLibres > 0){
                 Console.WriteLine("En total tienes " + HorasLibres + " horas libres");
                 Console.ReadKey();
                }else{
                Console.WriteLine("No puedes tomar tantas materias");
                Console.ReadKey();
                }   
             break;

             case "2":
                
                int mes = 30;
                HorasLibres = mes * UnDia;
                EstudioAutonomo = EstudioAutonomo * Materias;
                Materias = Materias * DiasLaborables;
                Materias = Materias * HorasxDia;
                Sueño = Sueño * mes;
                HorasLibres = (((HorasLibres - Sueño) - Materias)- EstudioAutonomo);
                if(HorasLibres > 0){ 
                   console.log("En total tienes " + HorasLibres + " horas libres");
                   Console.ReadKey();
                }else{
                   console.log("No puedes tomar tantas Materias");
                   Console.ReadKey();
                }
                break;

                default:

                Console.WriteLine("Esa OPCION no existe");
                Console.ReadKey();

            }

         

        } 
    }

}