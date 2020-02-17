export function miSome(

    arreglo: any[],

    Proceso: (

        valorActual: any,
        indice?: number,
        arreglo?: any[],
    ) => boolean

): boolean{

    for(let i = 0; i < arreglo.length; i++){

        const RespuestaSome = Proceso(
            arreglo[i],
            i,
            arreglo
        );
        
            if(RespuestaSome == true){
            return true
            }else{
                if(i != arreglo.length -1){         
                     return false
                }
            }
    }

}