export function map(

    arregloOriginal : any[],//Reviso el original
    Proceso: (
        valorActual: any, 
        indice?: number, 
        arreglo?: any[] ) => any
    
): any[]{

       const nuevoArrglo = [];
       const arreglo = [...arregloOriginal]; // le hago un clon 
       for(let i = 0; i < arreglo.length; i++ ){
          const clon = [...arreglo] // Crear clon
          const respuestaFuncion = Proceso(
              clon[i], 
              i, 
              clon, // clon para que juegue el programador);
          );
          nuevoArrglo.push(respuestaFuncion);
       }
    return nuevoArrglo;
 }


