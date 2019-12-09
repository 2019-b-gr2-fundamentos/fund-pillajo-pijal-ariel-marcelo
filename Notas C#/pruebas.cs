using System;

namespace Exam2
{

     class Fechas_de_Cumpleaños
     {

          static void Main(String[] args)
          {
              int e = 0;// aunque este declarado en la clase principal se teiene que declarar en la funcion que se llama
              MENSAJE();
              int c = SUMA();
              Console.WriteLine(c);
              Console.WriteLine(e);
              int we = c + 8;
              Console.WriteLine(we);

              Console.ReadKey();

          }

          static void  MENSAJE()
          {

             Console.Write("Hola Mundo");
    
          }
          
          static int SUMA(){

               
              int b = 4;
              // no se puede dar un resultado que no sea del tipo al que la funcion referencia
              int e = 3;

              return b + e; 
          }


    }
}