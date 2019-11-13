using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace While{

    class While{
        public static void main(string[] args){

            float Deberes = 1000;
            float DeberesRealizados = 0;
            float AnalisisSoxioeconomico = 0;
            float Algebra = 0;
            float Compiladores = 0;
            float FundamentosDeProgramacion = 0;
            float Calculo = 0;
            float Fisica = 0;
            float Ingles = 0;

            while (DeberesRealizados < Deberes){

                 DeberesRealizados = DeberesRealizados + 1;
                 float EsMultiplode3 = DeberesRealizados % 3;
                 float EsNumeroPar = DeberesRealizados % 2;
                 float EsNumeroImpar = DeberesRealizados % 2;
                 float EsMultiplode5 = DeberesRealizados % 5;
                 float EsMultiplode7 = DeberesRealizados % 7;
                 float EsMultiplode11 = DeberesRealizados % 11;
                 float EsMultiplode13 = DeberesRealizados % 13;
                 bool Par = EsNumeroPar == 0;
                 bool Multiplo3 = EsMultiplode3 == 0;
                 bool Impar = EsNumeroImpar != 0;
                 bool Multiplo5 = EsMultiplode5 == 0;
                 bool Multiplo7 = EsMultiplode7 == 0;
                 bool Multiplo11 = EsMultiplode11 == 0;
                 bool Multiplo13 = EsMultiplode13 == 0;

                 if (Multiplo3){

                    Ingles = Ingles + 1;

                 }else if (Multiplo11){

                    Fisica++;

                 } else if (Multiplo7) {

                    Calculo++;
 
                 }else if (Multiplo5) {

                    FundamentosDeProgramacion++;

                 }else if (Multiplo3){

                    Compiladores++;

                 } else if (Par){ //if anidados significa que solo se cumplira uno de estos no ambos

                    Algebra++;


                 } else if (Impar){

                    AnalisisSoxioeconomico++;

                 }

                 }

             Console.WriteLine("Hice " + AnalisisSoxioeconomico  + " de Analisis Socioeconomico");
             Console.WriteLine("Hice" + Algebra + " de Algebra");
             Console.WriteLine("Hice" + Compiladores + " de Compiladores");
             Console.WriteLine("Hice" + FundamentosDeProgramacion + " de Fundamentos de programacion");
             Console.WriteLine("Hice" + Calculo + " de Calculo");
             Console.WriteLine("Hice" + Fisica + "de Fisica ");
             Console.WriteLine("Hice" + Ingles  + "de Ingles");

         }

     }
 }        