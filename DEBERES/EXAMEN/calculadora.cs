/*
1) Escoger la operacion a Realizar
2) Proporcionar los Datos Correspondientes
3) Mostrar el Resultado
4) Elegir si desea cerrar el Programa
*/


using System;

namespace Exam1
{

    class calculadora
    {

        static void Main(String[] args)
        {

            Boolean Aceptacion = true;
            String Respuesta2,Respuesta3;
            Decimal Valor1, Valor2,Resultado = 0;
            
            while (Aceptacion == true)
            {

                int OperarDeNuevo = 0;
                do
                {
                    Console.WriteLine("Elija el numero que representa a la operacion que desea realizar");
                    Console.WriteLine();
                    String operacion = Console.ReadLine();

                    switch(operacion)
                    {
                        case "1":

                        if(OperarDeNuevo == 0)
                        {
                            Console.WriteLine("Dame el Valor 1");
                            Valor1 = Convert.ToDecimal(Console.ReadLine());
                            Console.WriteLine("Dame el Valor 2");
                            Valor2 = Convert.ToDecimal(Console.ReadLine());
                            Resultado = Valor1 + Valor2; 
                            Console.WriteLine("Tu resultado es: " +  Resultado);

                        }if(OperarDeNuevo != 0){
                            Valor1 = Resultado;
                            Console.WriteLine("Dame el Valor 2");
                            Valor2 = Convert.ToDecimal(Console.ReadLine());
                            Resultado = Valor1 + Valor2;
                            Console.WriteLine("Tu resultado es: " +  Resultado);

                        }

                        Console.WriteLine("¿Deseas seguir operando con tu Resultado Anterior?");
                        Respuesta2 = Console.ReadLine();
                        if(Respuesta2 == "Si"  ||Respuesta2 == "sÍ" || Respuesta2 == "si" || Respuesta2 == "SI" ||Respuesta2 == "sí" ||Respuesta2 =="sI" ||Respuesta2 == "SÍ" ||Respuesta2 == "Yes"){
                            OperarDeNuevo++;

                        }else{
                            OperarDeNuevo = 0;
                            Console.WriteLine("¿Desea hacer otra operación?");
                            Respuesta3 = Console.ReadLine();
                            if(Respuesta3 == "Si"  ||Respuesta3 == "sÍ" ||Respuesta3 == "si" ||Respuesta3 == "SI" ||Respuesta3 == "sí" ||Respuesta3 =="sI" ||Respuesta3 =="SÍ"||Respuesta3 == "Yes"){
                                Aceptacion = true; 

                            }else{
                                Aceptacion = false;                               
                            }

                            
                        }

                        break;

                        case "2":

                        if(OperarDeNuevo == 0)
                        {
                            Console.WriteLine("Dame el Valor 1");
                            Valor1 = Convert.ToDecimal(Console.ReadLine());
                            Console.WriteLine("Dame el Valor 2");
                            Valor2 = Convert.ToDecimal(Console.ReadLine());
                            Resultado = Valor1 - Valor2; 
                            Console.WriteLine("Tu resultado es: " +  Resultado);

                        }if(OperarDeNuevo != 0){
                            Valor1 = Resultado;
                            Console.WriteLine("Dame el Valor 2");
                            Valor2 = Convert.ToDecimal(Console.ReadLine());
                            Resultado = Valor1 - Valor2;
                            Console.WriteLine("Tu resultado es: " +  Resultado);

                        }

                        Console.WriteLine("¿Deseas seguir operando con tu Resultado Anterior?");
                        Respuesta2 = Console.ReadLine();
                        if(Respuesta2 == "Si" ||Respuesta2 == "sÍ" ||Respuesta2 == "si" ||Respuesta2 == "SI" ||Respuesta2 == "sí" ||Respuesta2 =="sI" ||Respuesta2 == "SÍ"||Respuesta2 == "Yes"){
                            OperarDeNuevo++;

                        }else{

                            OperarDeNuevo = 0;
                            Console.WriteLine("¿Desea hacer otra operación?");
                            Respuesta3 = Console.ReadLine();
                            if(Respuesta3 == "Si"  ||Respuesta3 == "sÍ" |Respuesta3 == "si" ||Respuesta3 == "SI" ||Respuesta3 == "sí" ||Respuesta3 =="sI" ||Respuesta3 =="SÍ"||Respuesta3 =="Yes"){
                                Aceptacion = true; 

                            }else{
                                Aceptacion = false;                               
                            }
                        
                        }

                        break;

                        case "3":

                        if(OperarDeNuevo == 0)
                        {
                            Console.WriteLine("Dame el Valor 1");
                            Valor1 = Convert.ToDecimal(Console.ReadLine());
                            Console.WriteLine("Dame el Valor 2");
                            Valor2 = Convert.ToDecimal(Console.ReadLine());
                            Resultado = Valor1 * Valor2; 
                            Console.WriteLine("Tu resultado es: " +  Resultado);

                        }if(OperarDeNuevo != 0){
                            Valor1 = Resultado;
                            Console.WriteLine("Dame el Valor 2");
                            Valor2 = Convert.ToDecimal(Console.ReadLine());
                            Resultado = Valor1 * Valor2;
                            Console.WriteLine("Tu resultado es: " +  Resultado);

                        }

                        Console.WriteLine("¿Deseas seguir operando con tu Resultado Anterior?");
                        Respuesta2 = Console.ReadLine();
                        if(Respuesta2 == "Si" ||Respuesta2 == "sÍ" ||Respuesta2 == "si" ||Respuesta2 == "SI" ||Respuesta2 == "sí" ||Respuesta2 =="sI" ||Respuesta2 == "SÍ"||Respuesta2 == "Yes"){
                            OperarDeNuevo++;

                        }else{

                            OperarDeNuevo = 0;
                            Console.WriteLine("¿Desea hacer otra operación?");
                            Respuesta3 = Console.ReadLine();
                            if(Respuesta3 == "Si"  ||Respuesta3 == "sÍ" |Respuesta3 == "si" ||Respuesta3 == "SI" ||Respuesta3 == "sí" ||Respuesta3 =="sI" ||Respuesta3 =="SÍ"||Respuesta3 =="Yes"){
                                Aceptacion = true; 

                            }else{
                                Aceptacion = false;                               
                            }
                        
                        }

                        break;

                        case "4":

                        if(OperarDeNuevo == 0)
                        {
                            Console.WriteLine("Dame el Valor 1");
                            Valor1 = Convert.ToDecimal(Console.ReadLine());
                            Console.WriteLine("Dame el Valor 2");
                            Valor2 = Convert.ToDecimal(Console.ReadLine());
                            Resultado = Valor1 / Valor2; 
                            Console.WriteLine("Tu resultado es: " +  Resultado);

                        }if(OperarDeNuevo != 0){
                            Valor1 = Resultado;
                            Console.WriteLine("Dame el Valor 2");
                            Valor2 = Convert.ToDecimal(Console.ReadLine());
                            Resultado = Valor1 / Valor2;
                            Console.WriteLine("Tu resultado es: " +  Resultado);

                        }

                        Console.WriteLine("¿Deseas seguir operando con tu Resultado Anterior?");
                        Respuesta2 = Console.ReadLine();
                        if(Respuesta2 == "Si" ||Respuesta2 == "sÍ" ||Respuesta2 == "si" ||Respuesta2 == "SI" ||Respuesta2 == "sí" ||Respuesta2 =="sI" ||Respuesta2 == "SÍ"||Respuesta2 == "Yes"){
                            OperarDeNuevo++;

                        }else{

                            OperarDeNuevo = 0;
                            Console.WriteLine("¿Desea hacer otra operación?");
                            Respuesta3 = Console.ReadLine();
                            if(Respuesta3 == "Si"  ||Respuesta3 == "sÍ" |Respuesta3 == "si" ||Respuesta3 == "SI" ||Respuesta3 == "sí" ||Respuesta3 =="sI" ||Respuesta3 =="SÍ"||Respuesta3 =="Yes"){
                                Aceptacion = true; 

                            }else{
                                Aceptacion = false;                               
                            }
                        
                        }

                        break;

                        case "5":

                        if(OperarDeNuevo == 0){

                            String QueSera;
                            Console.WriteLine("Calcular: \n 5.1 Energia \n 5.2 Masa");
                            QueSera = Console.ReadLine();
                            switch(QueSera){
                                case "5.1":

                                Console.WriteLine("Dame el Valor de masa en kg");
                                Valor1 = Convert.ToDecimal(Console.ReadLine());
                                Valor2 = 3000000;
                                if(Valor1 < 0){
                                Valor1 =  Valor1 * -1; 
                                }
                                Resultado = Valor1 * Valor2; 
                                Console.WriteLine("Tu Energia que puedes obtener de este objeto es de: " +  Resultado + " Joules");
                                break;

                                case "5.2":
                                Console.WriteLine("Dame el Valor Energia en Joules");
                                Valor1 = Convert.ToDecimal(Console.ReadLine());
                                Valor2 = 3000000;
                                if(Valor1 < 0){
                                Valor1 =  Valor1 * -1; 
                                }
                                Resultado = Valor1 / Valor2; 
                                Console.WriteLine("La masa en que puedes obtener de este objeto es de: " +  Resultado + " Kg");
                                break;


                            }
                        }

                            Console.WriteLine("¿Deseas seguir operando con tu Resultado Anterior?");
                            Respuesta2 = Console.ReadLine();
                            if(Respuesta2 == "Si" ||Respuesta2 == "sÍ" ||Respuesta2 == "si" ||Respuesta2 == "SI" ||Respuesta2 == "sí" ||Respuesta2 =="sI" ||Respuesta2 == "SÍ"||Respuesta2 == "Yes"){
                            OperarDeNuevo++;               
                            }else{
                            OperarDeNuevo = 0;
                            Console.WriteLine("¿Desea hacer otra operación?");
                            Respuesta3 = Console.ReadLine();
                            if(Respuesta3 == "Si"  ||Respuesta3 == "sÍ" |Respuesta3 == "si" ||Respuesta3 == "SI" ||Respuesta3 == "sí" ||Respuesta3 =="sI" ||Respuesta3 =="SÍ"||Respuesta3 =="Yes"){
                                Aceptacion = true; 
                            }else{
                                Aceptacion = false;                               
                            }
                        
                        }

                        break; 

                         case "6":

                        if(OperarDeNuevo == 0)
                        {
                            Console.WriteLine("Dame de tu angulo");
                            Valor1 = Convert.ToDecimal(Console.ReadLine());
                            Resultado = Math.Sin(Valor1);
                            Console.WriteLine("Tu resultado es: " +  Resultado);

                        }if(OperarDeNuevo != 0){
                            Valor1 = Resultado;
                            Resultado = Math.Sin(Valor1);
                            Console.WriteLine("Tu resultado es: " +  Resultado);

                        }

                        Console.WriteLine("¿Deseas seguir operando con tu Resultado Anterior?");
                        Respuesta2 = Console.ReadLine();
                        if(Respuesta2 == "Si" ||Respuesta2 == "sÍ" ||Respuesta2 == "si" ||Respuesta2 == "SI" ||Respuesta2 == "sí" ||Respuesta2 =="sI" ||Respuesta2 == "SÍ"||Respuesta2 == "Yes"){
                            OperarDeNuevo++;

                        }else{

                            OperarDeNuevo = 0;
                            Console.WriteLine("¿Desea hacer otra operación?");
                            Respuesta3 = Console.ReadLine();
                            if(Respuesta3 == "Si"  ||Respuesta3 == "sÍ" |Respuesta3 == "si" ||Respuesta3 == "SI" ||Respuesta3 == "sí" ||Respuesta3 =="sI" ||Respuesta3 =="SÍ"||Respuesta3 =="Yes"){
                                Aceptacion = true; 

                            }else{
                                Aceptacion = false;                               
                            }
                        
                        }

                        break;

                        case "7":

                        if(OperarDeNuevo == 0)
                        {
                            Console.WriteLine("Dame el Valor 1");
                            Valor1 = Convert.ToDecimal(Console.ReadLine());
                            Console.WriteLine("Dame el Valor 2");
                            Valor2 = Convert.ToDecimal(Console.ReadLine());
                            Resultado = Valor1 * Valor2; 
                            Console.WriteLine("Tu resultado es: " +  Resultado);

                        }if(OperarDeNuevo != 0){
                            Valor1 = Resultado;
                            Console.WriteLine("Dame el Valor 2");
                            Valor2 = Convert.ToDecimal(Console.ReadLine());
                            Resultado = Valor1 * Valor2;
                            Console.WriteLine("Tu resultado es: " +  Resultado);

                        }

                        Console.WriteLine("¿Deseas seguir operando con tu Resultado Anterior?");
                        Respuesta2 = Console.ReadLine();
                        if(Respuesta2 == "Si" ||Respuesta2 == "sÍ" ||Respuesta2 == "si" ||Respuesta2 == "SI" ||Respuesta2 == "sí" ||Respuesta2 =="sI" ||Respuesta2 == "SÍ"||Respuesta2 == "Yes"){
                            OperarDeNuevo++;

                        }else{

                            OperarDeNuevo = 0;
                            Console.WriteLine("¿Desea hacer otra operación?");
                            Respuesta3 = Console.ReadLine();
                            if(Respuesta3 == "Si"  ||Respuesta3 == "sÍ" |Respuesta3 == "si" ||Respuesta3 == "SI" ||Respuesta3 == "sí" ||Respuesta3 =="sI" ||Respuesta3 =="SÍ"||Respuesta3 =="Yes"){
                                Aceptacion = true; 

                            }else{
                                Aceptacion = false;                               
                            }
                        
                        }

                        break;

                    }

                }while(OperarDeNuevo != 0);
                
            }

            Console.WriteLine("Goodbye");
            
        }

    }
}