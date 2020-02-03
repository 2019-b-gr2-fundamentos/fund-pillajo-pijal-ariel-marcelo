// Referencias
function main(){

    // las primitivas hacen referencia al valor
    // arreglos hacen referencia a la direccion de memoria

    let uno = 1;
    let dos = uno; // Valor
    let tres = dos; // Valor
    console.log('uno',uno);
    console.log('dos',dos);
    console.log('tres',tres);

    uno = 5;

    console.log('uno',uno);
    console.log('dos',dos);
    console.log('tres',tres);

    let arreglito = [1,2,3];
    const miOtroArreglito = [];
    let a = arreglito[0];
    let b = arreglito[1];
    console.log('arreglito', arreglito);
    console.log('a', a);
    console.log('b', b );
    //miOtroArreglito = arreglito; // ref de memoria
    // para asignar valores de un arreglo a otro debemos..
    //Asignar a otro Arreglito una nueva direccion en memoria 
    // 1 --> FOR llenamos un arreglo
    // 2 --> Filter 
    // 3 --> MAP --> Nuevo arreglo
    
    //INMUTABILIDAD
    //JS ->Arreglo --> Clon
    //CLON DEL ARREGLO --> CLON TRABAJAR
    /*
    console.log('SoloELNombre', soloElNombre);
    miOtroArreglito.push(2);
    console.log('Ariel',Ariel);
    console.log('Ariel',Ariel);
    console.log('Ariel',Ariel);
    arreglito[0] = 9;
    arreglito[1] = 10;
    console.log('arreglito',arreglito);
    console.log('miOtroarreglito', miOtroArreglito);
    console.log('a', a);
    console.log('b', b);
    */


    let Ariel = {
        id: 1,
        nombre: 'Ariel',
        sueldo: 1.12
    };
    const soloElNombre = {
      ...Ariel
    };
    const copUno = {
        ...Ariel
    }
    const copDos = {
       ...Ariel
    }
    const copTres = {
        ...Ariel
    }
   

    console.log('Ariel',Ariel);
    console.log('SoloELNombre', soloElNombre);
    delete Ariel.nombre
    soloElNombre['edad'] = 22;
    // soloNOMBRE .edad
    console.log('Ariel',Ariel);
    console.log('soloElNombre',soloElNombre);
    console.log('copUno',copUno);
    console.log('copDos',copDos);
    console.log('copTres',copTres);



/*
    // es una manera de clonar
    miOtroArreglito = 
    [...arreglito,
        //...arreglito
    ];//  Ref Direccion de Memoria


*/



}
main();
