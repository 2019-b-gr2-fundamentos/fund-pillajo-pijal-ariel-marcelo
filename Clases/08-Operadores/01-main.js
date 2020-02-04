"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _02_filtrer_1 = require("./02-filtrer");
var _03_Map_1 = require("./03-Map");
var _04_forEach_1 = require("./04-forEach");
var _05_some_1 = require("./05-some");
var _06_Every_1 = require("./06-Every");
var _07_Reduce_1 = require("./07-Reduce");
function main() {
    var arregloEstudiantes = [
        { id: 1, nombre: 'Ariel', nota: 7 },
        { id: 2, nombre: 'Melanie', nota: 5 },
        { id: 3, nombre: 'Sara', nota: 4 },
        { id: 4, nombre: 'Andres', nota: 5 },
        { id: 5, nombre: 'Maria', nota: 5.9 }
    ]; // en este lenguaje podemos crear una estructura y usarla al mismo tiempo llenandola de datos
    // Operador -> FOREACH
    // Enviamos -> NADA
    // Recibimos -> Nada
    var respuestaForEach = arregloEstudiantes.forEach(function (valorActual, indice, arreglo) {
        console.log(valorActual);
    });
    console.log(respuestaForEach); // undefained
    //Map -> Transformar el arreglo
    // Enviamos -> valorActual modificado
    // RECIBIR -> Nuevo arreglo 
    var respuestaMap = arregloEstudiantes.map(function (valorActual, i, arreglo) {
        var nuevoObjeto = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota: valorActual.nota,
            nota20: valorActual.nota * 2
        };
        return nuevoObjeto;
    });
    console.log('RespuestaMap', respuestaMap);
    console.log('Arreglo de Estudiantes', arregloEstudiantes);
    // Filter --> filtrar el arreglo
    // Enviamos una condicion
    // recibimos -> Nuevo arreglo con valores filtrados 
    var respuestaFilter = arregloEstudiantes.filter(function (valorActual, i, arreglo) {
        var condicion7 = valorActual.nota >= 7;
        var condicion5 = valorActual.nota < 5;
        //Condiciones es un truty o un false
        return condicion7 || condicion5;
    });
    console.log('respuestaFilter', respuestaFilter);
    console.log('arregloEstudiates', arregloEstudiantes);
    // And -> EVERY(tODOS CUMPLEN ) / Or -> some (uno cumpla)
    // Some -> Devuelve verdadero o falso dependiendo de la condicion
    //         Si alguno cumple devuelve true
    //         Si ninguno cumple devuelve false
    // Enviamos -> Condicion 
    // Recibir -> Booleano
    var respuestaSome = arregloEstudiantes.some(function (valorActual, i, arr) {
        var condicion = valorActual.nota < 4;
        //Condicion truty o true
        return condicion;
    });
    console.log('respuestaSome', respuestaSome);
    console.log('arreglo Estudiantes', arregloEstudiantes);
    // EVERY -> Devuelve verdadero o falso dependiendo de la condicion
    //         Si TODOS  cumpleN devuelve true
    //         Si ninguno cumple devuelve false
    // Enviamos -> Condicion 
    // Recibir -> Booleano
    var respuestaEvery = arregloEstudiantes.every(function (valorActual, i, arr) {
        var condicion = valorActual.nota >= 4;
        return condicion;
    });
    console.log('respuestaEvery', respuestaEvery);
    console.log('arregloEstudiantes', arregloEstudiantes);
    // Reduce --> Devuelve un valor 
    // Enviamos -> Calculo 
    // Recibir --> Valor 
    // reduce resive 2 valores
    var respuestaReduce = arregloEstudiantes.reduce(function (acumuldor, valorActual, i, arr) {
        var calculo = acumuldor + valorActual.nota;
        console.log(acumuldor);
        return calculo;
    }, 0 //VAlor es donde empieza
    );
    console.log('respuestaReduce', respuestaReduce);
    console.log('Promedio', respuestaReduce / arregloEstudiantes.length); // para dividir por la 
    console.log('repuestaArreglo', arregloEstudiantes);
    var respuestaFilterNuestro = _02_filtrer_1.filter(arregloEstudiantes, function (valorActual, i, arr) {
        return valorActual.nota >= 7;
    });
    console.log('respuestaFilterNuestro', respuestaFilterNuestro);
    console.log('valorEstudiantes', arregloEstudiantes);
    var respuestaMapNuestro = _03_Map_1.map(arregloEstudiantes, function (valorActual) {
        var respuestaFuncion = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota: valorActual.nota,
            nota20: valorActual.nota * 20
        };
        return respuestaFuncion;
    });
    console.log('respuestaMapNuestro', respuestaMapNuestro);
    console.log('valorEstudiantes', arregloEstudiantes);
    _04_forEach_1.foreach(arregloEstudiantes, function (valorActual, indice, arreglo) {
        console.log('Mi forEach', valorActual.id);
        //console.log('Mi forEach', indice);
        //console.log('Mi forEach', arreglo);
    });
    var RespuestaMiSome = _05_some_1.miSome(arregloEstudiantes, function (valorActual) {
        return valorActual.id > 100;
    });
    console.log('RespuestaMisome', RespuestaMiSome);
    var RespuestaMiEvery = _06_Every_1.MiEvery(arregloEstudiantes, function (valorActual) {
        return valorActual.id < 5;
    });
    console.log('RespuestaMiEvery', RespuestaMiEvery);
    var respuestaMiReduce = _07_Reduce_1.MiReduce(arregloEstudiantes, function (acumlador, valor) {
        var calculo2 = acumlador + valor.nota;
        console.log(acumlador);
        return calculo2;
    }, 4);
    console.log("RespuestaMiReduce", respuestaMiReduce);
}
;
main();
