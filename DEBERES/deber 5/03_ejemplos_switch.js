// escribir tres ejemplos de  switch 

////switch
// bienvenido en que categoria encaja su articulo?
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



 

/////////switch
// llamada de emergencia 
// tenemos una pequeña pulsera que posee numeros del 1 al 4
// cada una de ellas solicita ayuda a un servicio especifico


var letraString = prompt("Presiona el numero 1 para iniciar ");
var Inicio = Number(letraString);
const Sos = "1. policia " + "\n" + "2. ambulancia" + "\n" + "3.- Bomberos" + "\n"  + "4.- cancelar llamada" 

if(inicio == 1){

  console.log("El programa ha sido iniciado");
  var eleccion = prompt("presione un numero" + "\n" + Sos);
  switch(eleccion){
  
        case 1 :
                        console.log("Se ha llamado a la policia");
         broke;

        case 2 :
                        console.log("Se ha llamado a la ambulancia");
         broke;

        case 3 :
                        console.log("Se ha llamado a los bomberos");
        broke;

        case 4 :
                        console.log("se ha cancelado"); 
         broke;
  }
}else{

}


// cuanto tiempo libre tiene un politecnico

const list = "1.- semana" +  "\n" + "2.- mes"
let TiempoString = prompt("deseas calcular el tiempo libre que tienes a la semana o al mes ?" + "\n" +  list );
let Tiempo =  Number(TiempoString);
let MateriasString = prompt("cuantas materias tienes ?" );
let Materias =  Number(MateriasString);
let SueñoString = prompt("cuantas horas de sueño requieres normalmente ?" );
let Sueño =  Number(SueñoString);
let resultado = 0;
switch(Tiempo){

        case 1:
                const semana = 7;
                let resultado = semana * 24
                Materias = Materias * 2
                Sueño = Sueño * 7 
                resultado = resultado - Sueño - Materias  

         break;

        case 2 :

         break;

}


