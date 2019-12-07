
/////////switch
// llamada de emergencia 
// tenemos una pequeña pulsera que posee numeros del 1 al 4
// cada una de ellas solicita ayuda a un servicio especifico





using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EscojeUnPais{

    class ejemplos_switch{

        public static void Main(string[] args){
        
          String Inicio, LLamada; 
          Console.WriteLine("Presiona el numero 1 para iniciar");
          Inicio = Console.ReadLine();

          switch(Inicio){
             case "1":

                Console.WriteLine("A quien debo llamar??\n" + 
                "1.- Policia" + 
                "2.- Ambulancia" +
                "3.- Bomberos" +
                "4.- Cancelar LLamada");
                LLamada =  Console.ReadLine();

                switch(LLamada){

                 case "1":
                 Console.WriteLine("LLamando a la policia.......");
                 Console.ReadKey();
                 break;

                 case "2":
                 Console.WriteLine("LLamando a la policia.......");
                 Console.ReadKey();
                 break;

                 case "3":
                  Console.WriteLine("LLamando a la policia.......");
                  Console.ReadKey();
                 break;

                 case "4":
                 Console.WriteLine("LLamando a la policia.......");
                 Console.ReadKey();
                 break;

                 default:
                 Console.WriteLine("Solicitud no Admitida......");
                 Console.ReadKey();
                 break;             

                 }
          
             break;


             default:

             Console.WriteLine("Solicitud no Admitida......");
             Console.ReadKey();

             break;
             
            }

        } 
    }

}