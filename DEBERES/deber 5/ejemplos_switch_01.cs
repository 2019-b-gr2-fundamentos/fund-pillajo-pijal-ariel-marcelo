// escribir tres ejemplos de switch


////switch
// bienvenido en que categoria encaja su gusto?
// seleccione una de ellas donde cada una esta asociada a su propio case 
// * lista de categorias 
// seleccione una categoria
// * lista de productos
// seleccione un producto 
// se enviara el precio 

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EscojeUnPais{

    class ejemplos_switch{

        public static void main(string[] args){
        
        int Categoria,Plato;
        Console.WriteLine("Escribe el numero que representa la categoria que prefieras\n" +
        "\n1.-Saludable" +
        "\n2.- Frito" +
        "\n3.-Dulce\n");
        Categoria = Int16.Parse(ReadLine());
         
         switch(Categoria){
           case 1 :
             
             Console.WriteLine("Genial apuesto que te veras bien despues\n"+
             "\n1.-Ensalada a la Diabla" + 
             "\n2.-champiñones curtidos" + 
             "\n3.-Pica que te llenas");
              Plato = Int16.Parse(ReadLine());
              switch(Plato){
                  case 1:

                  Console.WriteLine("Disfruta de tu Ensalada a la diabla su costo es de $ 6,99 gracias por preferirnos");

                  break;

                  case 2:

                  Console.WriteLine("Disfruta de champiñones curtidos su costo es de $ 8,99 gracias por preferirnos");

                  break;

                  case 3:
                  Console.WriteLine("Disfruta de Pica que te llenas su costo es de $ 6,50 gracias por preferirnos");
        

                  break;

                  default:
                  Console.WriteLine("No se ha selleccionado una opcion valida");

              }

           break;
           case 2 :
           Console.WriteLine("Solo se vive una vez\n"+
             "\n1.-Hamburguesa" + 
             "\n2.-Pizza" + 
             "\n3.-Salchipapas");
              Plato = Int16.Parse(ReadLine());
              switch(Plato){
                  case 1:
                   Console.WriteLine("Disfruta de hamburguesa su costo es de $ 3,99 gracias por preferirnos");
                  break;

                  case 2:
                   Console.WriteLine("Disfruta de pizza su costo es de $ 2,85 gracias por preferirnos");
                  break;

                  case 3:
                   Console.WriteLine("Disfruta de salchipapa su costo es de $ 1,50 gracias por preferirnos");
                  break;

                  default:
                   ConsoleWrite("No se ha seleccionado una opcion valida");
                  break;
                 }
           break;
           case 3:
           Console.WriteLine("MMM......\n"+
             "\n1.-Pasteñ" + 
             "\n2.-Helado" + 
             "\n3.-Gelatina");

              Plato = Int16.Parse(ReadLine());
              switch(Plato){
                  case 1:
                   Console.WriteLine("Disfruta de  Pastel su costo es de $ 2,25 gracias por preferirnos");
                  break;
                  
                  case 2:
                   Console.WriteLine("Disfruta de Helado su costo es de $ 4,20 gracias por preferirnos");
                  break;

                  case 3:
                    Console.WriteLine("Disfruta de Gelatina su costo es de $ 0,90 gracias por preferirnos");
                  break;

                  default:
                  
                    ConsoleWrite("No se ha seleccionado una opcion valida");
                  break;
                 }
           break;
         }

         

        } 
    }

}