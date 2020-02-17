import { Cumpleañeros } from "./interfaces/Cumpleañeros";
import * as prompts from './node_modules/prompts';
import { leerArchivo } from "./leer-Cumples";
import { escribirCumpleañeros} from "./Escribir-cumples"

async function main()
{
    let GuardarCumpleaños: Cumpleañeros[] = [];
    let contador = 1;
    // Se Carga la lista ya Guardada
    const ListadeCumpleañeros = leerArchivo('./ListadeCumpleañeros.txt');
    GuardarCumpleaños = JSON.parse(ListadeCumpleañeros);



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
           message:"¡¡No olvides otro cumpleaños jamas!!\n Seleccione una opcion\n 1. Crear\n 2. Actualizar\n 3. Borrar\n 4. Salir\n 5. Consultar"
         });
    
         switch(Decide.eleccion)
         {
             case '1': 
            { 
              IndiceNuncaRepetido();
              break;
            }     
             case '2': 
            {
                Actualizar();
                break;
            }
            case '3': 
            {
                OrdenarCumpleañeros();
                Eliminar();
                break;
            }
            case '4':{

                const ImprimeLista = JSON.stringify(GuardarCumpleaños)
                escribirCumpleañeros("./ListadeCumpleañeros.txt", ImprimeLista);
                console.log("Adiosito");  
                break;
            }

            case '5':{

                Consultar();
                break;

            }

            default:         
            {
               console.log("Opcion no Encontrada");
               Que_Desea_Hacer();
               break;
            }
         }
        
    }
    function IndiceNuncaRepetido(){
        
        GuardarCumpleaños.forEach(
            function(valorActual){

                if(contador == valorActual.id){
                    contador++;
                }          
            }
        );
        CrearCumpleañero();
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
        OrdenarCumpleañeros();
        Que_Desea_Hacer();
        
    }
    function Actualizar() {

        OrdenarCumpleañeros()
        ReemplazarCumpleañero()
    }
    function OrdenarCumpleañeros(){
        let indice = 0;
        
        while(indice < GuardarCumpleaños.length){
        let idPrimerCumpleañero = GuardarCumpleaños[indice].id
            GuardarCumpleaños.forEach(
                
                function (CumpleañeroTal, indiceCumpleañeroTal) {
                    if(indice < indiceCumpleañeroTal){
                        if(idPrimerCumpleañero > CumpleañeroTal.id){ 
                             console.log('indiceCumpleañeroTal',indiceCumpleañeroTal);
                             console.log('indice',indice);
                             let Guardardo = CumpleañeroTal;
                             idPrimerCumpleañero = Guardardo.id
                             GuardarCumpleaños.splice(indiceCumpleañeroTal,1);
                             GuardarCumpleaños.splice(indice,0,Guardardo);
                        }
                    }    
                }   
            );

            indice++;
        }
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
        if(indiceEncontrado == -1){
            console.log("Indice no encontrado");
            Que_Desea_Hacer();
        }else{
            let CumpleañeroActualizado = await prompts(UnCumpleañero);       
            const RespuestaActualizada = 
            {   
               id: Buscar.id,
               nombre: CumpleañeroActualizado.nombre, 
               apellido: CumpleañeroActualizado.apellido, 
               Año_De_Nacimiento: CumpleañeroActualizado.Año_De_Nacimiento, 
               Mes_De_Nacimiento: CumpleañeroActualizado.Mes_De_Nacimiento, 
               Dia_De_Nacimiento: CumpleañeroActualizado.Dia_De_Nacimiento, 
               Me_Gusta: CumpleañeroActualizado.Me_Gusta 
            };

            GuardarCumpleaños[indiceEncontrado] = RespuestaActualizada;
            Que_Desea_Hacer();
        }

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

        GuardarCumpleaños.splice(indiceEncontrado,1);

        Que_Desea_Hacer();
    }
    async function Consultar(){

        const buscar = await prompts(
            {
                type: 'text',
                name: 'nombre',
                message: 'Ingresa el nombre de la Persona a quien deseas encontrar'
            }
        )
        const EstudianteEncontrado = GuardarCumpleaños.find(
            function(valorActual){
                return valorActual.nombre == buscar.nombre;
            }
        );
            console.log(EstudianteEncontrado);
            Que_Desea_Hacer();
    }  
    
    Que_Desea_Hacer();
}
main();