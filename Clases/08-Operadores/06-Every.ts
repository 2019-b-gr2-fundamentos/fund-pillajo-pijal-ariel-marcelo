export function MiEvery(
    arreglo: any[],

    proceso: (
      
        ValorActual: any,
        indice?: number,
        arreglo?: any[],
    
    ) => boolean
): boolean{

    for(let i = 0; i < arreglo.length; i++){
        const respuestaEvery = proceso(
            arreglo[i],
            i,
            arreglo
        );

        if(respuestaEvery == false){
            return false;
        }else{
            if(i == arreglo.length-1){
                return false;
            }
        }
    }
}