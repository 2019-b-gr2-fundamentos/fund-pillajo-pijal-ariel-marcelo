console.log("Bienvenido a su calculadora a continuacion la lista de operaciones \n que puede realizar: ");
console.log("1 Multiplicacion" + "\n" + "2 Division" + "3.Multiplicacion" + "4 Division"
    + "5 Seno" + "7 E = mc^2");
var operacionString = prompt("Escribe el numero que hace referencia a la operacion a realizar: ");
var operacion = Number(operacionString);
var valor1String;
var valor2String;
var valor1;
var valor2;
var Resultado;
switch (operacion) {
    case 1:
        valor1String = prompt("Dame el primer valor a Sumar");
        valor1 = Number(valor1String);
        valor2String = prompt("Dame el segundo  valor a Sumar");
        valor2 = Number(valor2String);
        Resultado = valor1 + valor2;
        console.log("El resultado de tu suma es: " + Resultado);
        break;
    case 2:
        valor1String = prompt("Dame el primer valor a Restar");
        valor1 = Number(valor1String);
        valor2String = prompt("Dame el segundo  valor a Restar");
        valor2 = Number(valor2String);
        Resultado = valor1 - valor2;
        console.log("El resultado de tu resta es: " + Resultado);
        break;
    case 3:
        valor1String = prompt("Dame el primer valor a Multiplicar");
        valor1 = Number(valor1String);
        valor2String = prompt("Dame el segundo  valor a Multplicar");
        valor2 = Number(valor2String);
        Resultado = valor1 * valor2;
        console.log("El Resultado de tu Multiplicacion es: " + Resultado);
        break;
    case 4:
        valor1String = prompt("Dame el primer valor a Dividir");
        valor1 = Number(valor1String);
        valor2String = prompt("Dame el segundo  valor a Dividir");
        valor2 = Number(valor2String);
        Resultado = valor1 / valor2;
        console.log("El result;ado de tu Division es: " + Resultado);
        break;
    case 5:
        valor1String = prompt("Dame el angunlo del seno");
        valor1 = valor1String;
        Resultado = Math.sin(valor1);
        console.log("sen(" + valor1 + ") = " + Resultado);
        break;
    case 6:
        var velocidadDeLaLuzKmHora = 300000;
        var c2 = velocidadDeLaLuzKmHora * velocidadDeLaLuzKmHora;
        var UnidadDeMedidaString = prompt("¿El objeto tiene una masa en Kilogramos si o no?");
        var Respuesta = "Si" || "si" || "sì" || "sI";
        if (Respuesta == UnidadDeMedidaString) {
            var masaString = prompt("Dame la masa de tu objeto en Kilogramos ");
            var masa = Number(masaString);
            if (masa < 0) {
                masa = -1 * masa;
            }
            Resultado = (c2 * masa) * 1000;
            console.log("La energia que podemos obtener es de: " + Resultado + " [Joules]");
        }
        else {
            var masaString = prompt("Dame la masa en gramos ");
            var masa = Number(masaString);
            if (masa < 0) {
                masa = -1 * masa;
            }
            Resultado = (c2 * masa);
            console.log("La energia que podemos obtener es de: " + Resultado + " [Joules]");
        }
        break;
}
