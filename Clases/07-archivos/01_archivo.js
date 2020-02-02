"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _02_leer_archivo_1 = require("./02-leer-archivo");
var prompts = require("prompts");
var _03_Escribir_Archivo_1 = require("./03-Escribir-Archivo");
// * Este programa lee un archivio .txt y lo Parsea, se le añade a un arreglo 
// y despues pide datos que seran agregados al mismo arreglo
// PARSEAR --> TEXTO --> Estructura en memoria 
/*
    const arregloCargadoDeArchivo = JSON.parse('{"nombre":"adrian"}');  // Esta es la manera correcta de
                                                //  escribir una estructura en texto para luego parsearla
    console.log('contenidoArchivo', arregloCargadoDeArchivo );
*/
/*
// se identifica como tipo texto
{
    "nombre": "Ariel"
}

// otro tipo seria el siguiente
<universidad>
   <facultad></facultad>
</universidad>

*/
// como vamos a trabajar con el prompt que convierte en promesas trabajamos 
//con una funcion asincrona 
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var contador, contenidoArchivo, arregloCargadoDeArchivo, arregloEstudiantes, arregloPreguntas, respuestaEstudiante, NuevoRegistro, respuestaEstudianteDos, NuevoRegistroUno, minimoId, idABuscar, indiceEncontrado, nombreEditar, buscar, EstudianteEncontrado, arregloTexto, TextoLeido, nuevoContenido;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contador = 1;
                    contenidoArchivo = _02_leer_archivo_1.leerArchivo('./ejemplo.txt');
                    console.log('contenidoArchivo', contenidoArchivo);
                    try {
                        arregloCargadoDeArchivo = JSON
                            .parse(contenidoArchivo);
                    }
                    catch (error) {
                        arregloCargadoDeArchivo = [];
                        console.error('Error parseado');
                    }
                    console.log('nuevo arreglo parseado', arregloCargadoDeArchivo);
                    arregloEstudiantes = arregloCargadoDeArchivo;
                    arregloPreguntas = [
                        {
                            name: 'nombre',
                            type: 'text',
                            message: 'Ingresa Nombre'
                        }
                    ];
                    return [4 /*yield*/, prompts(arregloPreguntas)];
                case 1:
                    respuestaEstudiante = _a.sent();
                    NuevoRegistro = {
                        id: contador,
                        nombre: respuestaEstudiante.nombre
                    };
                    contador = contador + 1;
                    arregloEstudiantes.push(NuevoRegistro);
                    return [4 /*yield*/, prompts(arregloPreguntas)];
                case 2:
                    respuestaEstudianteDos = _a.sent();
                    NuevoRegistroUno = {
                        id: contador,
                        nombre: respuestaEstudianteDos.nombre
                    };
                    arregloEstudiantes.push(NuevoRegistroUno);
                    console.log('Arreglo Estudiantes', arregloEstudiantes);
                    /* Algunos errores en javascript donde trow new NombreDelError nos ayudara
                       a indicar al uuario que error esta sucediendo
                    
                    try{
                        
                        console.log('1');
                        console.log('2');
                        console.log('3');
                        //Syntaxis herror
                        let = 1;
                        let = 2;
                        console.log(11111111111111111111111111111111111111111111111111111111111111111111111111111122222222222212222222222222222);
                        throw new ReferenceError('El Archivo');
                        console.log("0"/0);
                        //throw new Error("eL archivo esta mal parseado ")
                        console.log('4');
                        console.log('5');
                    }catch(error){
                        console.log(error)
                        console.log(':3');
                    
                    }
                    
                    */
                    // Ahora vamos a sobreescribir algun dato del arreglo
                    console.log('Cual usuario quieres editar?');
                    console.log(arregloEstudiantes);
                    minimoId = -1;
                    arregloCargadoDeArchivo.forEach(// No envia nada ni recibe nada
                    // Iterar (repetir un proceso varias veces has alcanzar la meta)
                    function (valorActual) {
                        var idActual = valorActual.id;
                        if (idActual > minimoId) {
                            minimoId = idActual;
                        }
                        minimoId = minimoId + 1;
                        contador = minimoId;
                    });
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'id',
                            message: 'ingresa el identificado del registro editar'
                        })
                        // esta funcion  acepta otra funcion como dato de entrada
                        //  Remplaza al for 
                    ];
                case 3:
                    idABuscar = _a.sent();
                    indiceEncontrado = arregloEstudiantes.findIndex(// return CONDICION
                    function (valorActual, indice, arreglo) {
                        console.log(valorActual);
                        console.log(indice);
                        console.log(arreglo);
                        return valorActual.id == idABuscar.id; // No devueve el indice
                    } // si encuentra devuelve el indice
                    ) // no encuentra
                    ;
                    console.log('Indice encontrado', indiceEncontrado);
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nombre',
                            message: 'Ingresa el nuevo NOmbre'
                        })];
                case 4:
                    nombreEditar = _a.sent();
                    arregloEstudiantes[indiceEncontrado].nombre = nombreEditar.nombre;
                    console.log(arregloEstudiantes);
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nombre',
                            message: 'Buscar por ID o por nombre'
                        })];
                case 5:
                    buscar = _a.sent();
                    console.log("ASTA");
                    EstudianteEncontrado = arregloEstudiantes.find(function (valorActual) {
                        console.log(valorActual.nombre);
                        console.log(buscar.nombre);
                        return valorActual.nombre == buscar.nombre;
                    });
                    console.log(EstudianteEncontrado);
                    arregloTexto = JSON.stringify(arregloEstudiantes);
                    console.log(arregloTexto);
                    _03_Escribir_Archivo_1.escribirArchivo('./ejemplo.txt', arregloTexto);
                    TextoLeido = _02_leer_archivo_1.leerArchivo('./ejemplo.txt');
                    nuevoContenido = 'Temgo hambre :( \n';
                    _03_Escribir_Archivo_1.escribirArchivo('./ejemplo.txt', '');
                    console.log(TextoLeido + nuevoContenido);
                    return [2 /*return*/];
            }
        });
    });
}
main();
