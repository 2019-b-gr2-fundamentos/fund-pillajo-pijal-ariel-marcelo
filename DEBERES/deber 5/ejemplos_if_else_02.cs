//////////if 
// test de personalidad
// responde estas afirmaciones del 1 al 10 que tan deacuerdo estas con ellas
// es muy tipico pero me parecio divertido hacerlo




using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EscojeUnPais{

    class ejemplos_if_else_02{

        public static void main(string[] args){
         int Repuesta, Resultado = 0;
         String RespuestaA = "Eres una persona desinteresada y realmente le prestas atencion a los demas";
         String RespuestaB = "Eres mas egoista que los demas tiendes a poner a los demas en segundo lugar";
         Console.WriteLine("Bienvenido porfavor escriba del 1 al 10 que tan de acuerdo esta con las siguientes afrimaciones");
         Console.WriteLine("Probemos: Estoy Listo");
         Respuesta = Int16.Parse(Console.WriteLine());

         if(Respuesta >= 7 && Repuesta < 10){
             Console.WriteLine("Es mejor no tener internet que estar solo/a");
             Respuesta = Int16.Parse(Console.WriteLine());

             if(Respuesta >= 0 && Repuesta <= 10){
                 int importanciaPregunta = 2;
                 Resultado = Resultado + ((importanciaPregunta*Repuesta)/10);

                 
                Console.WriteLine("Es mejor sacrificarse por otros que ayudarte solo/a");
                Respuesta = Int16.Parse(Console.WriteLine());

                if(Respuesta >= 0 && Repuesta <= 10){
                   int importanciaPregunta = 3;
                   Resultado = Resultado + ((importanciaPregunta*Repuesta)/10);
                   if(Resultado > 2){
                     Console.WriteLine(RespuestaA);
                     Console.ReadKey();
                   }else{
                     Console.WriteLine(RespuestaB);
                     Console.ReadKey();
                   }
                }else{

                }
                 
             }else{

             }
           

         }else{
             Console.WriteLine("MMM mejor lo intentamos en otro momento");
         }

        } 
    }

}