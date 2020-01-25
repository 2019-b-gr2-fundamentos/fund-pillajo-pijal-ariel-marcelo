function sumar(numUno, numDOS) {
    return numUno + numDOS;
}
function restar(numUno, numDOS) {
    return numUno - numDOS;
}
function multiplicar(numUno, numDOS) {
    return numUno * numDOS;
}
function dividir(numUno, numDOS) {
    return numUno / numDOS;
}
//  MAIN SE REFRIERE A UNA FUNCON PRINCIPAL
function main() {
    calculadora();
}
function calculadora() 
{
    var operacion = prompt("Selecciona una operacion: ´Suma - 1´, ¨Resta-2¨, ¨Multilicacion-3¨ , ´Division-4´ y ¨Terminamos-5¨");
    var esSuma = operacion == "suma" ||
        operacion == "1" ||
        operacion == "Suma - 1";
    var esResta = operacion == "resta " ||
        operacion == "2" ||
        operacion == "Resta-2";
    var esMultiplicacion = operacion == "multiplicacion" ||
        operacion == "3" ||
        operacion == "Multilicacion-3";
    var esDivision = operacion == "division " ||
        operacion == "4" ||
        operacion == "Division-1";
    var seTermino = operacion == "terminamos" ||
        operacion == "5" ||
        operacion == "terminamos-5";
    var estaValido = esSuma || esResta || esMultiplicacion || esDivision || seTermino;
    if (estaValido) {
        var numUno = +prompt("Numero 1");
        var numDos = +prompt("Numero 2");
        var resultado = 0;
        if (esSuma) {
            resultado = sumar(numUno, numDos);
        }
        if (esResta) {
            resultado = restar(numUno, numDos);
        }
        if (esMultiplicacion) {
            resultado = multiplicar(numUno, numDos);
        }
        if (esDivision) {
            resultado = dividir(numUno, numDos);
        }else 

        {
            if (seTermino) {
                console.log("se Termino :)");
            }
            else {
                calculadora();
            }
        }
    }
}
/*
1) Seleccionar operacion
2.1) La seleccion no es VALIDA
    2.1.1) Vuelve a seleccionar la operacion
2.2) La seleccion es VALIDA
    2.2.1) Ingresar primer numero
    2.2.2) Ingresar segundo numero
    2.2.3) Ejecutar la operacion
 
*/ 
