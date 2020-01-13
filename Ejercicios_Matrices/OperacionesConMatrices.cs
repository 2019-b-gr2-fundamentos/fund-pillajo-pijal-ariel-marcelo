/*  1) Comparar dos Matrices
    2) Sumar cada fila y columna de una Matriz
    3) Intercambiar la diagonal de una Matriz
*/
using System;

namespace TrabajoEnClase
{
    class OperacionesConMatrices
    {
        public static void Main(String[] args)
        {                    
             int[,] MatrizUno = {{1,2,3,4},  //En c# solo se acepta el mismo tipo de datos y el mismo numero de
                                {4,5,8,7},
                                {9,1,3,8},
                                {6,7,4,2}};   //espacios en memoria, entonces siempre es una matriz
             int[,] MatrizDos = {{1,2,3},
                               {4,5,8}};
//1)
            Boolean TienenIgualesDimensiones = TienenLaMismaDimension(MatrizUno,MatrizDos);

            if(TienenIgualesDimensiones){
                Boolean SonIguales = CompararMatrices(MatrizUno,MatrizDos); 
                if(SonIguales){
                    Console.WriteLine(" son iguales");
                }else{
                    Console.WriteLine("No son iguales");
                }
            }else{
                 Console.WriteLine("No son iguales");
            }

//2)            
            SumaDeFilas(MatrizUno);
            SumaDeColumnas(MatrizUno);
//3)
            Boolean Cuadrada = EsCuadrada(MatrizUno);
            if(Cuadrada){

                IntercambiarDiagonales(MatrizUno);

            }else{
                Console.WriteLine("No es una matriz cuadrada, no es posible intercambiar diagonales");
            }
        }
        static Boolean TienenLaMismaDimension(int [,] MatrizUno ,int[,] MatrizDos)
        {

            int filasMatrizUno = MatrizUno.GetLength(0); 
            int filasMatrizDos = MatrizDos.GetLength(0);
            int columnasMatrizUno = MatrizUno.GetLength(1);
            int columnasMatrizDos = MatrizDos.GetLength(1);
 
            Boolean FilasIguales = filasMatrizUno == filasMatrizDos;
            Boolean ColumnasIguales = columnasMatrizUno == columnasMatrizDos;
            Boolean TienenIgualesDimensiones = FilasIguales && ColumnasIguales;  

            if(TienenIgualesDimensiones){
                return true;
            }else{
                return false;
            }
        }
        static Boolean CompararMatrices(int [,] MatrizUno ,int[,] MatrizDos)
        {
            //marices con dimenciones Iguales
            Boolean SonIguales = true; //Supones elementos Iguales
                
                for(int indicefilas = 0; indicefilas < MatrizUno.GetLength(0); indicefilas++)
                {

                    for(int indiceColumnas = 0; indiceColumnas <  MatrizUno.GetLength(1); indiceColumnas++)
                    {
                        int ElementoMatrizUno = MatrizUno[indicefilas,indiceColumnas];
                        int ElementoMatrizDos = MatrizDos[indicefilas,indiceColumnas];

                        if(ElementoMatrizUno != ElementoMatrizDos ){
                            SonIguales = false;
                        }
                    }
                } 

                return SonIguales;
        }

        static void SumaDeFilas(int[,] matriz)
        {
            for(int indicefilas = 0; indicefilas < matriz.GetLength(0); indicefilas++)
            {
                int b = 0,c = 0;
                for(int indiceColumnas = 0; indiceColumnas <  matriz.GetLength(1); indiceColumnas++)
                {
                    int a = matriz[indicefilas,indiceColumnas];   //a + b = c
                    c = a + b;
                    b = c;
                    int Tope = matriz.GetLength(1) - 1;
                    if(Tope == indiceColumnas){
                       int numFila = indicefilas + 1;
                       Console.WriteLine("La suma de la Fila " + numFila + " es: " + c ); 
                    }
                }
            } 

        }

         static void SumaDeColumnas(int[,] matriz)
        {
            for(int indiceColumnas = 0; indiceColumnas < matriz.GetLength(1); indiceColumnas++)
            {
                int b = 0,c = 0;
                for(int indicefilas = 0; indicefilas <  matriz.GetLength(0); indicefilas++)
                {
                    int a = matriz[indicefilas,indiceColumnas];   //a + b = c
                    c = a + b;
                    b = c;
                    int Tope = matriz.GetLength(0) - 1;
                    if(Tope == indicefilas){
                       int numColumna = indiceColumnas + 1;
                       Console.WriteLine("La suma de la Columna " + numColumna + " es: " + c ); 
                    }
                }
            } 
        }

        static Boolean EsCuadrada(int[,] matriz){
            int filasMatriz    = matriz.GetLength(0); 
            int columnasMatriz = matriz.GetLength(1);
            if(filasMatriz == columnasMatriz){
                return true;
            }else{
                return false;
            }
        }
        static void IntercambiarDiagonales(int[,] matriz){
            Console.WriteLine("Matriz Original");
            for(int indicefilas = 0; indicefilas < matriz.GetLength(0); indicefilas++)
            {
                for(int indiceColumnas = 0; indiceColumnas <  matriz.GetLength(1); indiceColumnas++)
                {
                    int a = matriz[indicefilas,indiceColumnas];  
                    int Tope = matriz.GetLength(1) - 1;
                    if(Tope > indiceColumnas){
                        Console.Write(a + ", ");
                    }else if(Tope == indiceColumnas){
                        Console.WriteLine(a);
                    }
                }
            }

            Console.WriteLine("Matiz con Diagonales Cambiadas");
            for(int indicefilas = 0; indicefilas < matriz.GetLength(0); indicefilas++)
            {
                int Reduce = 0;
                int Tope = matriz.GetLength(1) - 1;
                for(int indiceColumnas = 0; indiceColumnas <  matriz.GetLength(1); indiceColumnas++)
                {
                    int a = matriz[indicefilas,indiceColumnas];  
                    int indiceInverso = Tope - Reduce; // indice que va de izquierda a derecha
                    Reduce++;
                        if(indicefilas == indiceColumnas){
                            int i = matriz[indicefilas,indiceInverso];
                            matriz[indicefilas,indiceInverso] = a;
                            matriz[indicefilas,indiceColumnas] = i;
                        }
                }
            }

            for(int indicefilas = 0; indicefilas < matriz.GetLength(0); indicefilas++)
            {
                for(int indiceColumnas = 0; indiceColumnas <  matriz.GetLength(1); indiceColumnas++)
                {
                    int a = matriz[indicefilas,indiceColumnas];  
                    int Tope = matriz.GetLength(1) - 1;
                    if(Tope > indiceColumnas){
                        Console.Write(a + ", ");
                    }else if(Tope == indiceColumnas){
                        Console.WriteLine(a);
                    }
                }
            }
        }
    }
}