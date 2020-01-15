// 02 - crud.ts create read update delete 
//const prompts = require('prompts');
var prompts = require('prompts'); //importar el paquete prompts
function main() {
    obtenerDatosAnimalPerrito();
}
function obtenerDatosAnimalPerrito() {
    // Paradigma de programacion 
    // Sincrono vs Asincrono
    console.log('Inicio');
    var Promesaedad = prompts({
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
    });
    console.log(Promesaedad);
    Promesaedad
        .then(function (datos) {
        console.log('datos', datos); //Aqui puedo volver a pedir la edad
        var PromesaNombre = prompts({
            type: 'text',
            name: 'nombre',
            message: 'Puedes darme tu nombre?'
        });
        console.log(PromesaNombre);
        PromesaNombre
            .then(function (datos) {
            console.log('datos2', datos);
        })
            .catch(function (error) {
            console.log('Error', error);
        });
    })
        .catch(function (error) {
        console.log('Error', error);
    });
    console.log('Fin');
}
main();
// Solo las funciones tienen .then y el .catch
