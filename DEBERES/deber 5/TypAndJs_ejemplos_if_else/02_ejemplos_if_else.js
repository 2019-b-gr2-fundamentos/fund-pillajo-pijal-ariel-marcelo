
// En que ciudad del pais que quiero vivir  se ajusta a mis ingresos  mis ingresos 
// Quiere mudarse a un pais de la lista? si es asi ecriba el nombre del pais y le mostraremos 
// la ciudad con menor costo de vida  
// * lista
// con la ayuda de un if se determinara el pais de eleccion con  diferentes tipos de escrituras 
// se imprimira en pantalla el nombre de la ciudad y el costo de vida que se calculara con 
// el porcemtaje y el valor que tiene asociado esta ciudad 

const ListaPais = "1.- Brasil" + "\n" + "2.- Mexico" + "\n" + "3.- Colombia"

let PaisString = prompt("En que pais de la lista quieres vivvir ?" + "\n" +  ListaPais);
let Pais = Number(PaisString);

let SueldoString = prompt("De cuanto capital dipones mensualmente en dolares ");  
let Sueldo = Number(SueldoString);
switch(Pais){
    case 1 :
        if(Sueldo >= 480 ){
        console.log("Tu podria vivir en las ciudades de Brasilia, Rio de Janeiro o Sao pablo");
        }if(Sueldo < 480 && Sueldo >= 390){
        console.log("Tu podria vivir en las ciudades Salvador o Fortaleza");
        }if(Sueldo < 390){
         console.log("Tendras problemas para vivir en Brasil mejor piensa un mejor destino");  
        }
      broke;  
    case 2 :
         if(Sueldo >= 480 ){
          console.log("Tu podria vivir en Monterrey, Cancun, Queretaro, Guadalajara sin problema ");
         }if(Sueldo < 480 && Sueldo >= 390){
         console.log("Tu podria vivir en Cancun y Queretaro");
         }if(Sueldo < 390){
         console.log("Tu mejor opcion es la ciudad Guadalajara");  
         }

      broke;
    case 3 :
            if(Sueldo >= 480 ){
            console.log("Tu podria vivir en Bogota  ");
            }if(Sueldo < 480 && Sueldo >= 390){
            console.log("Tu podrias vivir en Baranquilla y Bucaramanga");
            }if(Sueldo < 390){
             console.log("Tu mejor opcion es la ciudad Bucaramanga");  
            }
      broek;
    
    default :
     
    console.log("La opcion seleccionada no esta disponibe");


}