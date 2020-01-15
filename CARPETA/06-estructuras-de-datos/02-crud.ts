// 02 - crud.ts create read update delete 
//const prompts = require('prompts');
import * as prompts from 'prompts'; //importar el paquete prompts
function main(){
    obtenerDatosAnimalPerrito();

}

function obtenerDatosAnimalPerrito(){
// Paradigma de programacion 

// Sincrono vs Asincrono
   console.log('Inicio'); 
   const Promesaedad = prompts({
       type: 'number',
       name: 'edad',
       message: 'Puedes darme tu edad?'
   });
   
     console.log(Promesaedad);
     Promesaedad
    .then(// OK
         (datos)=>{
           console.log('datos',datos); //Aqui puedo volver a pedir la edad

           const PromesaNombre = prompts({
            type: 'text',
            name: 'nombre',
            message: 'Puedes darme tu nombre?'
        });
          
        console.log(PromesaNombre);
        PromesaNombre
           .then(
               (datos)=>{
                   console.log('datos2',datos)
               }
           )

           .catch(
               (error)=>{
                   console.log('Error',error);

                      
                
               }
           )
           
       }
    )

    .catch( // =( promesa sale mal
       (error)=>{
           console.log('Error',error);
       }
   );
   console.log('Fin');
}

main();

// Solo las funciones tienen .then y el .catch
















