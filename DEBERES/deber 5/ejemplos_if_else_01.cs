//escribir 3 ejemplos de if else 



//////////if 
// En que ciudad del pais que quiero vivir  se ajusta a mis ingresos  mis ingresos 
// Quiere mudarse a un pais de la lista? si es asi ecriba el nombre del pais y le mostraremos 
// la ciudad con menor costo de vida  
// * lista
// con la ayuda de un if se determinara el pais de eleccion con  diferentes tipos de escrituras 
// se imprimira en pantalla el nombre de la ciudad y el costo de vida que se calculara con 
// el porcemtaje y el valor que tiene asociado esta ciudad 



using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EscojeUnPais{

    class ejemplos_if_else_01{

        public static void main(string[] args){
        
          float Sueldo;
          String Eleccion;            
          Console.WriteLine("En que pais  quieres vivvir ? Brazil, Mexico o Colombia");
          Eleccion = Console.ReadLine();
          Console.WriteLine("De cuanto capital dipones mensualmente en dolares a dolares");
          Sueldo = float.Parse(Console.ReadLine());


           if(Eleccion == "Brasil"|"brasil"|"brazil"|"Brazil"){
                if(Sueldo >= 480 ){
                Console.WriteLine("Tu podria vivir en las ciudades de Brasilia, Rio de Janeiro o Sao pablo");
                Console.ReadKey();
                }if(Sueldo < 480 && Sueldo >= 390){
                Console.WriteLine("Tu podria vivir en las ciudades Salvador o Fortaleza");
                Console.ReadKey();
                }if(Sueldo < 390){
                Console.WriteLine("Tendras problemas para vivir en Brasil mejor piensa un mejor destino"); 
                Console.ReadKey(); 
                }
           }if(Eleccion == "Mexico"|"Méxxico"|"mexico"|"méxico"){
               if(Sueldo >= 480 ){
               Console.WriteLine("Tu podria vivir en Monterrey, Cancun, Queretaro, Guadalajara sin problema ");
               Console.ReadKey();
              }if(Sueldo < 480 && Sueldo >= 390){
               Console.WriteLine("Tu podria vivir en Cancun y Queretaro");
               Console.ReadKey();
              }if(Sueldo < 390){
               Console.WriteLine("Tu mejor opcion es la ciudad Guadalajara");  
               Console.ReadKey();
              }


           }if(Eleccion == "Colombia"|"colombia"){
               if(Sueldo >= 480 ){
                Console.WriteLine("Tu podria vivir en Bogota  ");
                Console.ReadKey();
               }if(Sueldo < 480 && Sueldo >= 390){
                Console.WriteLine("Tu podrias vivir en Baranquilla y Bucaramanga");
                Console.ReadKey();
               }if(Sueldo < 390){
                Console.WriteLine("Tu mejor opcion es la ciudad Bucaramanga");  
                Console.ReadKey();
               }
           }
        } 
    }

}






































