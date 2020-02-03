var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Referencias
function main() {
    // las primitivas hacen referencia al valor
    // arreglos hacen referencia a la direccion de memoria
    var uno = 1;
    var dos = uno; // Valor
    var tres = dos; // Valor
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    uno = 5;
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    var arreglito = [1, 2, 3];
    var miOtroArreglito = [];
    var a = arreglito[0];
    var b = arreglito[1];
    console.log('arreglito', arreglito);
    console.log('a', a);
    console.log('b', b);
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
    var Ariel = {
        id: 1,
        nombre: 'Ariel',
        sueldo: 1.12
    };
    var soloElNombre = __assign({}, Ariel);
    var copUno = __assign({}, Ariel);
    var copDos = __assign({}, Ariel);
    var copTres = __assign({}, Ariel);
    console.log('Ariel', Ariel);
    console.log('SoloELNombre', soloElNombre);
    delete Ariel.nombre;
    soloElNombre['edad'] = 22;
    // soloNOMBRE .edad
    console.log('Ariel', Ariel);
    console.log('soloElNombre', soloElNombre);
    console.log('copUno', copUno);
    console.log('copDos', copDos);
    console.log('copTres', copTres);
    /*
        // es una manera de clonar
        miOtroArreglito =
        [...arreglito,
            //...arreglito
        ];//  Ref Direccion de Memoria
    
    
    */
}
main();
