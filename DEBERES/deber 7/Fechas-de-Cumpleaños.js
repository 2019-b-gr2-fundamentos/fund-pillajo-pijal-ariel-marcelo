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
var prompts = require("./node_modules/prompts");
var leer_Cumples_1 = require("./leer-Cumples");
var Escribir_cumples_1 = require("./Escribir-cumples");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        function Que_Desea_Hacer() {
            return __awaiter(this, void 0, void 0, function () {
                var Decide, ImprimeLista;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'text',
                                name: 'eleccion',
                                message: "¡¡No olvides otro cumpleaños jamas!!\n Seleccione una opcion\n 1. Crear\n 2. Actualizar\n 3. Borrar\n 4. Salir\n"
                            })];
                        case 1:
                            Decide = _a.sent();
                            switch (Decide.eleccion) {
                                case '1':
                                    {
                                        IndiceNuncaRepetido();
                                        break;
                                    }
                                case '2':
                                    {
                                        Actualizar();
                                        break;
                                    }
                                case '3':
                                    {
                                        OrdenarCumpleañeros();
                                        Eliminar();
                                        break;
                                    }
                                case '4': {
                                    ImprimeLista = JSON.stringify(GuardarCumpleaños);
                                    Escribir_cumples_1.escribirCumpleañeros("./ListadeCumpleañeros.txt", ImprimeLista);
                                    console.log("Adiosito");
                                    break;
                                }
                                default:
                                    {
                                        console.log("Opcion no Encontrada");
                                        Que_Desea_Hacer();
                                        break;
                                    }
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        function IndiceNuncaRepetido() {
            GuardarCumpleaños.forEach(function (valorActual) {
                if (contador == valorActual.id) {
                    contador++;
                }
            });
            CrearCumpleañero();
        }
        function CrearCumpleañero() {
            return __awaiter(this, void 0, void 0, function () {
                var DatosCumpleañeros, Respuesta;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts(UnCumpleañero)];
                        case 1:
                            DatosCumpleañeros = _a.sent();
                            Respuesta = {
                                id: contador,
                                nombre: DatosCumpleañeros.nombre,
                                apellido: DatosCumpleañeros.apellido,
                                Año_De_Nacimiento: DatosCumpleañeros.Año_De_Nacimiento,
                                Mes_De_Nacimiento: DatosCumpleañeros.Mes_De_Nacimiento,
                                Dia_De_Nacimiento: DatosCumpleañeros.Dia_De_Nacimiento,
                                Me_Gusta: DatosCumpleañeros.Me_Gusta
                            };
                            GuardarCumpleaños.push(Respuesta);
                            contador = contador + 1;
                            OrdenarCumpleañeros();
                            Que_Desea_Hacer();
                            return [2 /*return*/];
                    }
                });
            });
        }
        function Actualizar() {
            OrdenarCumpleañeros();
            ReemplazarCumpleañero();
        }
        function OrdenarCumpleañeros() {
            var indice = 0;
            var _loop_1 = function () {
                var idPrimerCumpleañero = GuardarCumpleaños[indice].id;
                GuardarCumpleaños.forEach(function (CumpleañeroTal, indiceCumpleañeroTal) {
                    if (indice < indiceCumpleañeroTal) {
                        if (idPrimerCumpleañero > CumpleañeroTal.id) {
                            console.log('indiceCumpleañeroTal', indiceCumpleañeroTal);
                            console.log('indice', indice);
                            var Guardardo = CumpleañeroTal;
                            idPrimerCumpleañero = Guardardo.id;
                            GuardarCumpleaños.splice(indiceCumpleañeroTal, 1);
                            GuardarCumpleaños.splice(indice, 0, Guardardo);
                        }
                    }
                });
                indice++;
            };
            while (indice < GuardarCumpleaños.length) {
                _loop_1();
            }
        }
        function ReemplazarCumpleañero() {
            return __awaiter(this, void 0, void 0, function () {
                var Buscar, indiceEncontrado, CumpleañeroActualizado, RespuestaActualizada;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('Ingresa el identificador  del Cumpleañero que desees actualizar');
                            console.log(GuardarCumpleaños);
                            return [4 /*yield*/, prompts({
                                    type: 'number',
                                    name: 'id',
                                    message: 'ingresa el identificado del registro editar'
                                })];
                        case 1:
                            Buscar = _a.sent();
                            indiceEncontrado = GuardarCumpleaños.findIndex(function (valorActual) {
                                return valorActual.id == Buscar.id;
                            });
                            if (!(indiceEncontrado == -1)) return [3 /*break*/, 2];
                            console.log("Indice no encontrado");
                            Que_Desea_Hacer();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, prompts(UnCumpleañero)];
                        case 3:
                            CumpleañeroActualizado = _a.sent();
                            RespuestaActualizada = {
                                id: Buscar.id,
                                nombre: CumpleañeroActualizado.nombre,
                                apellido: CumpleañeroActualizado.apellido,
                                Año_De_Nacimiento: CumpleañeroActualizado.Año_De_Nacimiento,
                                Mes_De_Nacimiento: CumpleañeroActualizado.Mes_De_Nacimiento,
                                Dia_De_Nacimiento: CumpleañeroActualizado.Dia_De_Nacimiento,
                                Me_Gusta: CumpleañeroActualizado.Me_Gusta
                            };
                            GuardarCumpleaños[indiceEncontrado] = RespuestaActualizada;
                            Que_Desea_Hacer();
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        function Eliminar() {
            return __awaiter(this, void 0, void 0, function () {
                var Buscar, indiceEncontrado;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('Ingresa el identificador  del Cumpleañero que desees eliminar');
                            console.log(GuardarCumpleaños);
                            return [4 /*yield*/, prompts({
                                    type: 'number',
                                    name: 'id',
                                    message: 'ingresa el identificado del registro editar'
                                })];
                        case 1:
                            Buscar = _a.sent();
                            indiceEncontrado = GuardarCumpleaños.findIndex(function (valorActual) {
                                return valorActual.id == Buscar.id;
                            });
                            GuardarCumpleaños.splice(indiceEncontrado, 1);
                            Que_Desea_Hacer();
                            return [2 /*return*/];
                    }
                });
            });
        }
        var GuardarCumpleaños, contador, ListadeCumpleañeros, UnCumpleañero;
        return __generator(this, function (_a) {
            GuardarCumpleaños = [];
            contador = 1;
            ListadeCumpleañeros = leer_Cumples_1.leerArchivo('./ListadeCumpleañeros.txt');
            GuardarCumpleaños = JSON.parse(ListadeCumpleañeros);
            Que_Desea_Hacer();
            UnCumpleañero = [
                {
                    type: 'text',
                    name: 'nombre',
                    message: 'Ingresa Nombre'
                },
                {
                    type: 'text',
                    name: 'apellido',
                    message: 'Ingresa el Apellido'
                },
                {
                    type: 'number',
                    name: 'Año_De_Nacimiento',
                    message: 'Ingresa el Año de Nacimiento'
                },
                {
                    type: 'text',
                    name: 'Mes_De_Nacimiento',
                    message: 'Ingresa el Mes de Nacimiento'
                },
                {
                    type: 'number',
                    name: 'Dia_De_Nacimiento',
                    message: 'Ingresa el Dia de Nacimiento'
                },
                {
                    type: 'text',
                    name: 'Me_Gusta',
                    message: 'Dime lo que te Gusta'
                }
            ];
            return [2 /*return*/];
        });
    });
}
main();
