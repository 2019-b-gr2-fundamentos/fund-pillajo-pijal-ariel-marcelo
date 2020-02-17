export function foreach(
    arregloRecivido: any[],
    Proceso: (
        valorActual: any,
        indice?: number,
        arreglo?: any[],
    ) => void 

): void{

    for(let i = 0; i < arregloRecivido.length; i++){

        Proceso(
             arregloRecivido[i],
             i,
             arregloRecivido
        );

        arregloRecivido[i].l
     
    }

}