var arregloMatriz = [
    [1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9],
    []
];
function compararMatriz(matrizUno, matrizDos) {
    var esValido = tienenMatricesIgualesDimensiones(matrizUno, matrizDos);
    if (esValido) {
        // Comparar los valores
        return tienenLosMismosValores(matrizUno, matrizDos); // boolean
    }
    else {
        return false;
    }
}
function tienenLosMismosValores(matrizUno, matrizDos) {
    var primeraDimemncion = matrizUno.length;
    var segundaDimencion = matrizUno[0].length;
    var banderaSonIguales = true;
    for (var i = 0; i < primeraDimemncion; i++) {
        for (var j = 0; j > segundaDimencion; ++j) {
            var ValorActualM1 = matrizUno[i][j];
            var ValorActualM2 = matrizDos[i][j];
            if (ValorActualM1 != ValorActualM2) {
                banderaSonIguales = false;
            }
        }
    }
    return banderaSonIguales;
}
function tienenMatricesIgualesDimensiones(matrizUno, matrizDos) {
    var matrizUnoPrimeraDimension = obtenerPrimeraDimension(matrizUno);
    var matrizUnoSegundaDimension = obtenerSegundaDimension(matrizUno);
    var matrizDosPrimeraDimension = obtenerPrimeraDimension(matrizDos);
    var matrizDosSegundaDimension = obtenerSegundaDimension(matrizDos);
    console.log(matrizUnoPrimeraDimension);
    console.log(matrizUnoSegundaDimension);
    console.log(matrizDosPrimeraDimension);
    console.log(matrizDosSegundaDimension);
    var noHayFalsos = matrizUnoPrimeraDimension != false &&
        matrizUnoSegundaDimension != false &&
        matrizDosPrimeraDimension != false &&
        matrizDosSegundaDimension != false;
    var TienenIgualesDimensiones = matrizUnoPrimeraDimension == matrizDosPrimeraDimension &&
        matrizUnoSegundaDimension == matrizDosSegundaDimension;
    if (noHayFalsos) {
        if (TienenIgualesDimensiones) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
function obtenerPrimeraDimension(matrizUno) {
    //Validaciones
    var esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if (esValido) {
        var primeraDimemnsionArreglo = matrizUno.length;
        return primeraDimemnsionArreglo;
    }
    else {
        return false;
    }
}
function obtenerSegundaDimension(matrizUno) {
    var esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if (esValido) {
        var longitudActualMaxima = 0; // Auxiliar
        var longitudActualMinima = -1; // Auxliar
        for (var i = 0; i < matrizUno.length; i++) {
            var elementoActual = matrizUno[i]; // arreglo
            var longitudActual = elementoActual.length; // SEGUNDA DIMENSION
            if (longitudActualMaxima < longitudActual) {
                longitudActualMaxima = longitudActual;
            }
            if (longitudActualMinima == -1) {
                longitudActualMinima = longitudActual;
            }
            else {
                if (longitudActual < longitudActualMinima) {
                    longitudActualMinima = longitudActual;
                }
            }
        }
        if (longitudActualMaxima != longitudActualMinima) {
            return false;
        }
        else {
            return matrizUno[0].length;
        }
    }
    else {
        return false;
    }
}
function verificarTodosLosElementosDeUnArregloSonArreglo(arreglo) {
    for (var i = 0; i < arreglo.length; i++) {
        var elementoActual = arreglo[i];
        var esUnArreglo = typeof elementoActual == "object" &&
            elementoActual.indexOf; // truty
        if (!esUnArreglo) {
            return false;
        }
    }
    return true;
}
function main() {
    var x = [
        [3, 4, 9, 8, 6, 6, 6, 6],
        [3, 4, 9, 8, 6, 6, 6, 6]
    ];
    var y = [
        [3, 4, 9, 8, 6, 6, 6, 6],
        [3, 4, 9, 8, 6, 6, 6, 6]
    ];
    var resultado = compararMatriz(x, y);
    console.log("RESULTADO: ", resultado);
}
main();
