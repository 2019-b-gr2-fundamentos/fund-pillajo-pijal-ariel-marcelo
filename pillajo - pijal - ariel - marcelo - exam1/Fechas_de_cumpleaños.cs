/*
Seleccione una Opcion
1)Crear
  1,1)Guardar Fecha de Cumpleaños de una Persona
     1.1.0) Seleccionar una Posicion 
     1.1.1) ESTA VACIO SI no lo esta, volver a 1.1.0)
     1,1,2) nombre:""
     1.1.2) nombre:"" mes de nacimiento: int 
     1.1.3) nombre:"" mes de nacimiento: int dia: int
2)Actualizar
     2.1) Seleccionar una Posicion 
     2.2) Si esta vacio entonces volver a 2.1)
     2.3) nombre:"" mes de nacimiento: int
     2.4) nombre:"" mes de nacimiento: int dia: int
3)Eliminar
      3.1) Seleccionar una Posicio
      3.2) Si esta vacio entonces 3.1)
      3.3) Eliminar Contenido en la Posicion Indicada
4)Salir

*/
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exam2
{

     class Fechas_de_Cumpleaños
     {

          static void Main(String[] args)
          {

              string Inicio = Bienvenida();
              int exit = 11, indice = 0,SuMes = 0;
              int SuDia = 0;
              int  Segun_ElMes_Elegido = 1;

              ArrayList nombre = new ArrayList();
              ArrayList mes = new ArrayList();
              ArrayList dia = new ArrayList();
              
              do{

                   switch(Inicio){

                        case "1":

                        Console.Write(" Llena las casillas correspondientes \n Casilla: " + indice +" Nombre:" );
                        string SuNombre = Console.ReadLine();
                        nombre.Add(SuNombre);
                        Console.Write(" Casilla: " + indice + " Nombre: " + nombre[indice] + " Mes: " );
                        SuMes = Convert.ToInt32(Console.ReadLine());
                        while(SuMes <= 0 || SuMes > 12){
                             Console.Write(" Casilla: " + indice + " Nombre: " + nombre[indice] + " Mes: " );
                             SuMes = Convert.ToInt32(Console.ReadLine());
                        }
                        mes.Add(SuMes);

                        Console.Write(" Casilla: " + indice + " Nombre: " + nombre[indice] + " Mes: " + mes[indice] + " Dia: " );
                        SuDia = Convert.ToInt32(Console.ReadLine());

                        Segun_ElMes_Elegido = 1;

                        while (Segun_ElMes_Elegido != 0)
                        {   
                              if(SuMes == 4 || SuMes == 6 || SuMes == 9 || SuMes == 11)
                              {  

                                   
                                 while (SuDia <= 0 || SuDia > 30)
                                 {
                                      Segun_ElMes_Elegido = 0;
                                      Console.Write(" Casilla: " + indice + " Nombre: " + nombre[indice] + " Mes: " + mes[indice] + " Dia: " );
                                      SuDia = Convert.ToInt32(Console.ReadLine());
                                 }
                              
                              }else{
                                   Segun_ElMes_Elegido = 0;

                              }

                              if(SuMes == 1 || SuMes == 3 || SuMes == 5 || SuMes == 7 || SuMes == 8 || SuMes == 10 || SuMes == 12)
                              {
                                   
                                  while (SuDia <= 0 || SuDia > 31){

                                     
                                      Segun_ElMes_Elegido = 0;
                                      Console.Write(" Casilla: " + indice + " Nombre: " + nombre[indice] + " Mes: " + mes[indice] + " Dia: " );
                                      SuDia = Convert.ToInt32(Console.ReadLine());
                                      
                                    }

                                 Console.WriteLine(SuDia);

                              }else{
                                   Segun_ElMes_Elegido = 0;
                              }
                              
                              if(SuMes == 2){
                                 while (SuDia <= 0 || SuDia > 28)
                                 {
                                      Segun_ElMes_Elegido = 0;
                                      Console.Write(" Casilla: " + indice + " Nombre: " + nombre[indice] + " Mes: " + mes[indice] + " Dia: " );
                                      SuDia = Convert.ToInt32(Console.ReadLine());
                                 }
                              }else{

                                   Segun_ElMes_Elegido = 0;

                              }
                              
                         }

                        dia.Add(SuDia);
                        Console.Write(" Casilla: " + indice + " Nombre: " + nombre[indice] + " Mes: " + mes[indice] + " Dia: " + dia[indice] );
                        indice++;
                        Inicio = Bienvenida();                      

                        break;

                        case "2":

                        for(int i = 0; i < indice; i++)
                        {
                             Console.WriteLine(" Casilla: " + i + " Nombre: " + nombre[i] + " Mes: " + mes[i] + " Dia: " + dia[i]);
                        }

                        int Indice2 = Posicion();

                        while (Indice2 > indice || Indice2 < 0)
                        {
                             Console.WriteLine("La casilla escogida no tiene un dato para Actualizar");
                             Indice2 = Posicion();

                        }
                        Console.WriteLine(" Casilla: " + Indice2 + " Nombre: " + nombre[Indice2] + " Mes: " + mes[Indice2] + " Dia: " + mes[Indice2] );
                        Console.Write(" Casilla: " + Indice2 + " Nombre: ");
                        SuNombre = Console.ReadLine();
                        nombre[Indice2] = SuNombre;

                        Console.Write(" Casilla: " + Indice2 + " Nombre: " + nombre[Indice2] + " Mes: " );
                        SuMes = Convert.ToInt32(Console.ReadLine());

                        while(SuMes <= 0 || SuMes > 12){
                             Console.Write(" Casilla: " + Indice2 + " Nombre: " + nombre[Indice2] + " Mes: " );
                             SuMes = Convert.ToInt32(Console.ReadLine());
                        }
                        mes[Indice2] = SuMes;
                        Console.Write(" Casilla: " + Indice2 + " Nombre: " + nombre[Indice2] + " Mes: " + mes[Indice2] + " Dia: " );
                        SuDia = Convert.ToInt32(Console.ReadLine());

                        Segun_ElMes_Elegido = 1;

                        while (Segun_ElMes_Elegido != 0)
                        {    
                              if(SuMes == 4 || SuMes == 6 || SuMes == 9 || SuMes == 11)
                              {  

                                   
                                 while (SuDia <= 0 || SuDia > 30)
                                 {
                                      Segun_ElMes_Elegido = 0;
                                      Console.Write(" Casilla: " + Indice2 + " Nombre: " + nombre[Indice2] + " Mes: " + mes[Indice2] + " Dia: " );
                                      SuDia = Convert.ToInt32(Console.ReadLine());
                                 }
                              
                              }else{
                                   Segun_ElMes_Elegido = 0;

                              }

                              if(SuMes == 1 || SuMes == 3 || SuMes == 5 || SuMes == 7 || SuMes == 8 || SuMes == 10 || SuMes == 12)
                              {
                                   
                                  while (SuDia <= 0 || SuDia > 31){
                              
                                      Segun_ElMes_Elegido = 0;
                                      Console.Write(" Casilla: " + Indice2 + " Nombre: " + nombre[Indice2] + " Mes: " + mes[Indice2] + " Dia: " );
                                      SuDia = Convert.ToInt32(Console.ReadLine());
                                      Console.WriteLine(SuMes);
                                    }

                                 Console.WriteLine(SuDia);

                              }else{
                                   Segun_ElMes_Elegido = 0;
                              }
                              
                              if(SuMes == 2){
                                 while (SuDia <= 0 || SuDia > 28)
                                 {
                                      Segun_ElMes_Elegido = 0;
                                      Console.Write(" Casilla: " + Indice2 + " Nombre: " + nombre[Indice2] + " Mes: " + mes[Indice2] + " Dia: " );
                                      SuDia = Convert.ToInt32(Console.ReadLine());
                                 }
                              }else{

                                   Segun_ElMes_Elegido = 0;

                              }
                              
                         }
                        dia[Indice2] = SuDia;
                        Console.Write(" Casilla: " + Indice2 + " Nombre: " + nombre[Indice2] + " Mes: " + mes[Indice2] + " Dia: " + dia[Indice2] );
                        Inicio = Bienvenida();

                        break;

                        case "3":

                        for(int i = 0; i < indice; i++)
                        {
                             Console.WriteLine(" Casilla: " + i + " Nombre: " + nombre[i] + " Mes: " + mes[i] + " Dia: " + dia[i]);
                        }

                        int Indice3 = Posicion();

                        while (Indice3 > indice || Indice3 < 0)
                        {
                             Console.WriteLine("La casilla escogida no tiene un dato para Borrar");
                             Indice3 = Posicion();

                        }

                        Console.WriteLine("Casilla Eliminada \n  Casilla: " + Indice3 + " Nombre: " + nombre[Indice3] + " Mes: " + mes[Indice3] + " Dia: " + mes[Indice3] );

                        nombre[Indice3] = "null";
                        mes[Indice3] = 0;
                        dia[Indice3] = 0;
                        Inicio = Bienvenida();

                        break;

                        case "4":

                        Console.WriteLine("GoodBye");
                        exit = 0;

                        break;

                        default:
                        Console.WriteLine("No se encuentra definida esa opcion");
                        Inicio = Bienvenida();
                        break;
                   }

              }while(exit != 0);

          }

          public static string Bienvenida(){

               Console.WriteLine(" \n Bienvenido \n ¿Que desea hacer en el arreglo? \n 1 Crear \n 2 Actualizar \n 3 Eliminar \n 4 Salir");
               string Respuesta = Console.ReadLine();
               return Respuesta;
          }

          public static int Posicion(){

               Console.WriteLine(" Elija el numero de Casilla en la que quiera trabajar");
               int Casilla = Convert.ToInt32(Console.ReadLine());
               return Casilla;
          }
     }
}














