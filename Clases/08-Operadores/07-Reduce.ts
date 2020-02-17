export function MiReduce(
    arreglo: any[],
    proceso: (
        acumulador: number,
        valorActual: any,
        indice?: number,
        arreglo?: any[],
    ) => any,
    acumulador: number,
): any{

    for(let i = 0; i < arreglo.length; i++){
        const RespuestaReduce = proceso(

            acumulador,
            arreglo[i],
            i,
            arreglo,

        );

        acumulador = RespuestaReduce

        if(i == arreglo.length -1){
            return acumulador
        }
    
    }

}