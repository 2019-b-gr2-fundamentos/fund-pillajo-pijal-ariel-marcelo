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
function main() {
    return __awaiter(this, void 0, void 0, function () {
        function Que_Desea_Hacer() {
            return __awaiter(this, void 0, void 0, function () {
                var Decide;
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
                                        CrearDato();
                                        break;
                                    }
                                case '2':
                                    {
                                        Actualizar();
                                        break;
                                    }
                                case '3':
                                    {
                                        Eliminar();
                                        break;
                                    }
                                case '4': {
                                    console.log("Adiosito");
                                    break;
                                }
                                default:
                                    {
                                        Que_Desea_Hacer();
                                        console.log("Opcion no Encontrada");
                                        break;
                                    }
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        function CrearDato() {
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
                            console.log(GuardarCumpleaños[contador - 1]);
                            contador = contador + 1;
                            Que_Desea_Hacer();
                            return [2 /*return*/];
                    }
                });
            });
        }
        function Actualizar() {
            return __awaiter(this, void 0, void 0, function () {
                var Buscar, indiceEncontrado, indiceActualizado, Actualizado, RespuestaActualizada;
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
                            indiceActualizado = indiceEncontrado + 1;
                            return [4 /*yield*/, prompts(UnCumpleañero)];
                        case 2:
                            Actualizado = _a.sent();
                            RespuestaActualizada = {
                                id: indiceActualizado,
                                nombre: Actualizado.nombre,
                                apellido: Actualizado.apellido,
                                Año_De_Nacimiento: Actualizado.Año_De_Nacimiento,
                                Mes_De_Nacimiento: Actualizado.Mes_De_Nacimiento,
                                Dia_De_Nacimiento: Actualizado.Dia_De_Nacimiento,
                                Me_Gusta: Actualizado.Me_Gusta
                            };
                            GuardarCumpleaños[indiceEncontrado] = RespuestaActualizada;
                            Que_Desea_Hacer();
                            return [2 /*return*/];
                    }
                });
            });
        }
        function Eliminar() {
            return __awaiter(this, void 0, void 0, function () {
                var Buscar, indiceEncontrado, Vacio;
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
                            Vacio = {
                                id: indiceEncontrado + 1,
                                nombre: null,
                                apellido: null,
                                Año_De_Nacimiento: null,
                                Mes_De_Nacimiento: null,
                                Dia_De_Nacimiento: null,
                                Me_Gusta: null
                            };
                            if (indiceEncontrado != -1) {
                                GuardarCumpleaños.splice(indiceEncontrado, 1, Vacio);
                            }
                            Que_Desea_Hacer();
                            return [2 /*return*/];
                    }
                });
            });
        }
        var GuardarCumpleaños, contador, UnCumpleañero;
        return __generator(this, function (_a) {
            GuardarCumpleaños = [];
            contador = 1;
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
            Que_Desea_Hacer();
            return [2 /*return*/];
        });
    });
}
main();
