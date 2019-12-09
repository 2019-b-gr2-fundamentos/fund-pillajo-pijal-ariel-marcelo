using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prub{

    class prueba2{

        static void Main(String[] args){
            ArrayList lista = new ArrayList();

            for(int i = 0; i < 6; i++){
            
            Console.WriteLine("Anota");
            string Seven = Console.ReadLine(); 
            
            lista.Add(Seven); 
            lista.RemoveAt(0);  

            

            if(lista[0] ==  null){
                Console.WriteLine("Truty");

            }else{

                Console.WriteLine("Falsy");

            }


            }

            
            
            Console.WriteLine(lista);


        }
    }
}