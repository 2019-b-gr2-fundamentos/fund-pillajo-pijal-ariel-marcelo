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