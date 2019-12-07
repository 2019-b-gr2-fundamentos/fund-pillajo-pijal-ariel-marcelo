// escribir tres ejemplos de  switch 

////switch
// bienvenido en que categoria encaja su gusto?
// seleccione una de ellas donde cada una esta asociada a su propio case 
// * lista de categorias 
// seleccione una categoria
// * lista de productos
// seleccione un producto 
// se enviara el precio 


var listaCategoria = "1. Saludable" + "\n" + "2.Frito" + "\n" + "3. Dulce" 
var CategoriaString = prompt("Escribe el numero que representa la categoria que prefieras" + "\n" + listaCategoria );

const Categoria = Number(CategoriaString);

switch(CategoriaString){

    case 1 :
    
     const platoSaludable = "1. Ensalada a la Diabla" + "\n" + "2.champiñones curtidos" + "\n" + "3. Pica que te llenas" + "\n"  
     let Saludable = prompt("Genial apuesto que te veras bien despues" + "\n" + platoSaludable);

     switch(Saludable){
        
        case 1 :
       
        console.log("Disfruta de tu Ensalada a la diabla su costo es de $ 6,99 gracias por preferirnos");

        break;

        case 2 :
       
            console.log("Disfruta de champiñones curtidos su costo es de $ 8,99 gracias por preferirnos");
    
            break;

        case 3 :
       
                console.log("Disfruta de Pica que te llenas su costo es de $ 6,50 gracias por preferirnos");
        
                break;
        default :
            
            console.log("La opcion  escogida no existe");
           
      }  

     break;

    case 2 :

     const platoFrito = "1. hamburguesa" + "\n" + "2.pizza" + "\n" + "3. salchipapas"   
     let Frito = prompt("Solo se vive una vez" + "\n" + platoFrito);
       
     switch(Frito){
               
        case 1 :
              
               console.log("Disfruta de hamburguesa su costo es de $ 3,99 gracias por preferirnos");
       
               break;
       
        case 2 :
              
                console.log("Disfruta de pizza su costo es de $ 2,85 gracias por preferirnos");
           
                break;
       
        case 3 :
              
                console.log("Disfruta de salchipapa su costo es de $ 1,50 gracias por preferirnos");
               
                 break;

        default :
                   
                 console.log("La opcion  escogida no existe");
     }             

     break;
   
    case 3 :

    const platoDulce = "1. Pastel" + "\n" + "2.Helado" + "\n" + "3. Gelatina"   
            let Dulce = prompt("MMMM....." + "\n" + platoDulce);
              
            switch(Dulce){
                      
               case 1 :
                     
                     console.log("Disfruta de  Pastel su costo es de $ 2,25 gracias por preferirnos");
              
                      break;
              
               case 2 :
                     
                       console.log("Disfruta de Helado su costo es de $ 4,20 gracias por preferirnos");
                  
                       break;
              
               case 3 :
                     
                       console.log("Disfruta de Gelatina su costo es de $ 0,90 gracias por preferirnos");
                      
                        break;
       
               default :
                          
                        console.log("La opcion  escogida no existe");
            }      

    
    default :

    console.log("Porfavor ingrese una secuencia valida");
}



 






