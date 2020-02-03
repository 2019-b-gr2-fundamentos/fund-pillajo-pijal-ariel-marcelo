import { filter } from './02-filtrer';

function main(){
    const arregloEstudiantes: any = [  // no es una buena practica tiparle con any pero funciona
        {id:1, nombre: 'Ariel', nota: 7},
        {id:2, nombre: 'Melanie', nota: 5},
        {id:3, nombre: 'Sara', nota: 4},
        {id:4, nombre: 'Andres', nota: 5},
        {id:5, nombre: 'Maria', nota: 5.9}
    ]; // en este lenguaje podemos crear una estructura y usarla al mismo tiempo llenandola de datos

// Operador -> FOREACH
// Enviamos -> NADA
// Recibimos -> Nada


    const respuestaForEach = arregloEstudiantes.forEach(
              function(valorActual, indice, arreglo){
              console.log(valorActual.nota);
             }
       );
       console.log(respuestaForEach);// undefained


       //Map -> Transformar el arreglo
       // Enviamos -> valorActual modificado
       // RECIBIR -> Nuevo arreglo 

       const respuestaMap = arregloEstudiantes.map(

           function(valorActual, i, arreglo){
               const nuevoObjeto = {
            
                   id: valorActual.id,
                   nombre: valorActual.nombre,
                   nota: valorActual.nota,
                   nota20: valorActual.nota*2
               };
               return nuevoObjeto
           }
       );
       console.log('RespuestaMap', respuestaMap);
       console.log('Arreglo de Estudiantes', arregloEstudiantes);

       // Filter --> filtrar el arreglo

       // Enviamos -> Nuevo arreglo con valores filtrados 

       const respuestaFilter = arregloEstudiantes.filter(

           function(valorActual, i, arreglo){

              const condicion7 = valorActual.nota >= 7;
              const condicion5 = valorActual.nota < 5;
              //Condiciones es un truty o un false
              return condicion7 || condicion5;
           }
       );
       console.log('respuestaFilter', respuestaFilter);
       console.log('arregloEstudiates', arregloEstudiantes);
        
       // And -> EVERY(tODOS CUMPLEN ) / Or -> some (uno cumpla)

       // Some -> Devuelve verdadero o falso dependiendo de la condicion
       //         Si alguno cumple devuelve true
       //         Si ninguno cumple devuelve false
       // Enviamos -> Condicion 
       // Recibir -> Booleano


       const respuestaSome = arregloEstudiantes.some(

            function(valorActual, i, arr){

                const condicion = valorActual.nota < 4;
                //Condicion truty o true
                return condicion;
            }
        );
        console.log('respuestaSome', respuestaSome);
        console.log('arreglo Estudiantes', arregloEstudiantes);



       // EVERY -> Devuelve verdadero o falso dependiendo de la condicion
       //         Si TODOS  cumpleN devuelve true
       //         Si ninguno cumple devuelve false
       // Enviamos -> Condicion 
       // Recibir -> Booleano


       const respuestaEvery = arregloEstudiantes.every(
           
                function(valorActual, i, arr){
                    const condicion = valorActual.nota >= 4;
                    return condicion;
                }
            );

            console.log('respuestaEvery', respuestaEvery);
            console.log('arregloEstudiantes', arregloEstudiantes);

     // Reduce --> Devuelve un valor 
     // Enviamos -> Calculo 
     // Recibir --> Valor 
     
     // reduce resive 2 valores

     const respuestaReduce = arregloEstudiantes.reduce(

          function(acumuldor, valorActual, i, arr){ //
            const calculo = acumuldor + valorActual.nota;
            console.log(acumuldor);
            return calculo;

          },

           0  //VAlor es donde empieza
      );

      console.log('respuestaReduce', respuestaReduce);
      console.log('Promedio', respuestaReduce / arregloEstudiantes.length); // para dividir por la 
      console.log('repuestaArreglo', arregloEstudiantes);



    const respuestaFilterNuestro = filter(

        arregloEstudiantes,
        
        function(valorActual, i, arr){
            console.log('Valor', valorActual);
            console.log('Indice', i);
            console.log('Arreglo', arr);
            return valorActual.nota >= 7
        }

    );

    console.log('respuestaFilterNuestro', respuestaFilterNuestro);
    console.log('valorEstudiantes', arregloEstudiantes);


};
main();