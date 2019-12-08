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
            Decimal Valor1 = 0, Valor2 = 0,Resultado = 0;
            Double Base = 0,Radical = 1,Exponente, ini = 1;
            
            while (Aceptacion == true)
            {

                int OperarDeNuevo = 0;
                do
                {
                    Console.WriteLine("Elija el numero que representa a la operacion que desea realizar \n 1 Suma \n 2 Resta \n 3 Multiplicacion \n 4 Division \n 5 E = mc2 \n  6 Sin(x) \n " );
                    Console.WriteLine("7 Regla de tres  \n 8 Promedio  \n 9 Potencia  \n 10 Raiz");
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

                        Double angulo;
                        Double y = 0;

                        if(OperarDeNuevo == 0)
                        {
                           
                            Console.WriteLine("Dame de tu angulo");
                            angulo = Convert.ToDouble(Console.ReadLine());
                            y = Math.Sin(angulo);
                            Console.WriteLine("Tu resultado es: " +  y);

                        }if(OperarDeNuevo != 0){
                            angulo = y;
                            y = Math.Sin(angulo);
                            Console.WriteLine("Tu resultado es: " +  y);

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
                            Console.WriteLine("Dame el Valor TotaL");
                            Valor1 = Convert.ToDecimal(Console.ReadLine());
                            Console.WriteLine("Dame el Valor Obtenido");
                            Valor2 = Convert.ToDecimal(Console.ReadLine());
                            Decimal Todo = 100;
                            Resultado = ((Valor2 * Todo)/Valor1); 
                            Console.WriteLine("EL porcentaje en relacion al valor Total es de: " +  Resultado + " %");

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


                        case "8":
 
                        if(OperarDeNuevo == 0)
                        {
                            Console.WriteLine("¿Cuantos Valores vas a ingresar?");
                            int DatosIngresados = Convert.ToInt32(Console.ReadLine());
                            int indice;
                            for( indice = 1; indice <= DatosIngresados; indice++ ){
                                Console.WriteLine(" Ingrese el Valor #" + indice);
                                Valor1 = Convert.ToDecimal(Console.ReadLine());
                                Resultado = Valor1 + Valor2;
                                Valor2 = Resultado;

                            }
                            
                            Decimal ValoresIngresados = Convert.ToDecimal(indice);
                            Resultado = (Resultado)/(ValoresIngresados-1);
                            Console.WriteLine("EL Promedio total es de: " + Resultado);
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

                        case "9":


                        if(OperarDeNuevo == 0)
                        {
                            Console.WriteLine("Dame el la Base de la Potencia");
                            Base = Convert.ToDouble(Console.ReadLine());
                            Console.WriteLine("Dame EL Valor del Exponente");
                            Exponente = Convert.ToDouble(Console.ReadLine());
                            Resultado = Convert.ToDecimal(Math.Pow(Base,Exponente));
                            Console.WriteLine("Tu resultado es: " +  Resultado);

                        }if(OperarDeNuevo != 0){
                            Base = Convert.ToDouble(Resultado);
                            Console.WriteLine("Dame el Valor del Exponente");
                            Exponente = Convert.ToDouble(Console.ReadLine());
                            Resultado = Convert.ToDecimal(Math.Pow(Base,Exponente));
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
                            if(Respuesta3 == "Si"  ||Respuesta3 == "sÍ" ||Respuesta3 == "si" ||Respuesta3 == "SI" ||Respuesta3 == "sí" ||Respuesta3 =="sI" ||Respuesta3 =="SÍ"||Respuesta3 =="Yes"){
                                Aceptacion = true; 

                            }else{
                                Aceptacion = false;                               
                            }
                        
                        }

                        break;

                        case "10":


                        if(OperarDeNuevo == 0)
                        {
                            Console.WriteLine("Dame el Valor de la Base");
                            Base = Convert.ToDouble(Console.ReadLine());
                            Console.WriteLine("Dame EL Valor del Radical");
                            Exponente = Convert.ToDouble(Console.ReadLine());     
                            Radical = ini /Exponente;
                            Resultado = Convert.ToDecimal(Math.Pow(Base,Radical));
                            Console.WriteLine("Tu resultado es: " +  Resultado);

                        }if(OperarDeNuevo != 0){
                            Base = Convert.ToDouble(Resultado);
                            Console.WriteLine("Dame el Valor del Radical");
                            Exponente = Convert.ToDouble(Console.ReadLine());
                            Radical = ini/Exponente;
                            Resultado = Convert.ToDecimal(Math.Pow(Base,Radical));
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
                            if(Respuesta3 == "Si"  ||Respuesta3 == "sÍ" ||Respuesta3 == "si" ||Respuesta3 == "SI" ||Respuesta3 == "sí" ||Respuesta3 =="sI" ||Respuesta3 =="SÍ"||Respuesta3 =="Yes"){
                                Aceptacion = true; 

                            }else{
                                Aceptacion = false;                               
                            }
                        
                        }

                        break;

                        default :
                        Console.WriteLine("La opcion seleccionada no existe");

                        break;



                    }

                }while(OperarDeNuevo != 0);
                
            }

            Console.WriteLine("Goodbye");
            
        }

    }
}