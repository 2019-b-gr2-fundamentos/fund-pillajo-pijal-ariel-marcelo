import { Cumpleañeros } from "./interfaces/Cumpleañeros";
import * as prompts from './node_modules/prompts';
import { leerArchivo } from "./leer-Cumples";

async function main()
{

    let GuardarCumpleaños: Cumpleañeros[] = [];
    let contador = 1;

    // Se guarda la lista ya Guardada
    const ListadeCumpleañeros = leerArchivo('./ListadeCumpleañeros.txt');
    GuardarCumpleaños = JSON.parse(ListadeCumpleañeros)

    const UnCumpleañero  =
    [
        {
            type: 'text',
            name: 'nombre',
            message: 'Ingresa Nombre'
        },
        {
            type: 'text',
            name: 'apellido',
            message: 'Ingresa el Apellido'
        },
        {
            type: 'number',
            name: 'Año_De_Nacimiento',
            message: 'Ingresa el Año de Nacimiento'
        },
        {
            type: 'text',
            name: 'Mes_De_Nacimiento',
            message: 'Ingresa el Mes de Nacimiento'
        },
        {
            type: 'number',
            name: 'Dia_De_Nacimiento',
            message: 'Ingresa el Dia de Nacimiento'
        },
        {
            type: 'text',
            name: 'Me_Gusta',
            message: 'Dime lo que te Gusta'
        }

    ];
    
    async function Que_Desea_Hacer()
     {

        let Decide = await prompts
         ({
           type: 'text',
           name: 'eleccion',    
           message:"¡¡No olvides otro cumpleaños jamas!!\n Seleccione una opcion\n 1. Crear\n 2. Actualizar\n 3. Borrar\n 4. Salir\n"
         });
    
         switch(Decide.eleccion)
         {
             case '1': 
            { 
              CrearCumpleañero();
              break;
            }     
             case '2': 
            {
                Actualizar();
                break;
            }
            case '3': 
            {
                Eliminar();
                break;
            }
            case '4':{
                console.log("Adiosito");  
                break;
            }
            default:         
            {
               Que_Desea_Hacer();
               console.log("Opcion no Encontrada");
               break;
            }
         }
        
    }

    async function CrearCumpleañero()
    {
        let DatosCumpleañeros = await prompts (UnCumpleañero);
        
        const Respuesta = 
        {   
            id: contador,
            nombre: DatosCumpleañeros.nombre,
            apellido: DatosCumpleañeros.apellido,
            Año_De_Nacimiento: DatosCumpleañeros.Año_De_Nacimiento,
            Mes_De_Nacimiento: DatosCumpleañeros.Mes_De_Nacimiento,
            Dia_De_Nacimiento: DatosCumpleañeros.Dia_De_Nacimiento,
            Me_Gusta: DatosCumpleañeros.Me_Gusta 
        };

        GuardarCumpleaños.push(Respuesta); 
        contador = contador + 1;
        Que_Desea_Hacer();
    }

    function Actualizar() {

        OrdenarCumpleañeros()
        ReemplazarCumpleañero()
    }

    function OrdenarCumpleañeros(){

        let indice = 0;
                    
        

            let idPrimerCumpleañero = GuardarCumpleaños[indice].id
        while(indice < GuardarCumpleaños.length){
            GuardarCumpleaños.forEach(
                function (CumpleañeroTal, indiceCumpleañeroTal) {
                    console.log('indiceCumpleañeroTal',indiceCumpleañeroTal);
                    console.log('indice',indice);

                    if(indice <= indiceCumpleañeroTal){

                        if(idPrimerCumpleañero > CumpleañeroTal.id){ 
                             console.log('indiceCumpleañeroTal',indiceCumpleañeroTal);
                             console.log('indice',indice);
                             let Guardardo = CumpleañeroTal;
                            GuardarCumpleaños.splice(indiceCumpleañeroTal,1);
                            GuardarCumpleaños.splice(indice,0,Guardardo);
                        }
                    }    

                //console.log(GuardarCumpleaños);
             
                } 
                      
             );

             indice++;
             
        }

        console.log(GuardarCumpleaños);
    }

    async function ReemplazarCumpleañero(){

        console.log('Ingresa el identificador  del Cumpleañero que desees actualizar');
        console.log(GuardarCumpleaños);

        const Buscar = await prompts(
            {
                type: 'number',
                name: 'id',
                message: 'ingresa el identificado del registro editar'
            }
        );

        const indiceEncontrado = GuardarCumpleaños.findIndex( 
            function(valorActual){     
                return valorActual.id == Buscar.id; 
            } 
        );
        
        let indiceActualizado = indiceEncontrado + 1;

            let Actualizado = await prompts(UnCumpleañero);       
            const RespuestaActualizada = 
            {   
               id: indiceActualizado, nombre: Actualizado.nombre, apellido: Actualizado.apellido, Año_De_Nacimiento: Actualizado.Año_De_Nacimiento, Mes_De_Nacimiento: Actualizado.Mes_De_Nacimiento, Dia_De_Nacimiento: Actualizado.Dia_De_Nacimiento, Me_Gusta: Actualizado.Me_Gusta 
            };

            GuardarCumpleaños[indiceEncontrado] = RespuestaActualizada;
            Que_Desea_Hacer();
    }
    async function Eliminar() {
        console.log('Ingresa el identificador  del Cumpleañero que desees eliminar');
        console.log(GuardarCumpleaños);

        const Buscar = await prompts(
            {
                type: 'number',
                name: 'id',
                message: 'ingresa el identificado del registro editar'
            }
        );

        const indiceEncontrado = GuardarCumpleaños.findIndex( 
            function(valorActual){     
                return valorActual.id == Buscar.id; 
            } 
        );

        let minimoId = indiceEncontrado;

        GuardarCumpleaños.splice(indiceEncontrado,1);

        GuardarCumpleaños
        .forEach(
           function(valorActual){ 

              const idActual = valorActual.id;
            if(idActual > minimoId){
                minimoId = idActual
                }

             minimoId = minimoId + 1;
             contador = minimoId;
       
         });

   console.log(minimoId);
   console.log(arregloCargadoDeArchivo);
     
        const Vacio = 
        {   
           id:indiceEncontrado + 1,
           nombre: null,
           apellido: null,
           Año_De_Nacimiento: null, 
           Mes_De_Nacimiento: null,
           Dia_De_Nacimiento: null,
           Me_Gusta: null 
        };
        
        if(indiceEncontrado != -1){
            GuardarCumpleaños.splice(indiceEncontrado , 1 , Vacio);
        }

        Que_Desea_Hacer();
    }

    Que_Desea_Hacer();

}
main();