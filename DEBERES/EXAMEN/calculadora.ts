console.log("Bienvenido a su calculadora a continuacion la lista de operaciones \n que puede realizar: ");
console.log("1 Multiplicacion" + "\n" + "2 Division" + "3.Multiplicacion" + "4 Division"
              + "5 Seno" + "7 E = mc^2");

const operacionString = prompt("Escribe el numero que hace referencia a la operacion a realizar: "); 
const operacion = Number(operacionString);

let valor1String;
let valor2String;
let valor1;
let valor2; 
let Resultado;
switch(operacion){

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
       const velocidadDeLaLuzKmHora = 300000;
       const c2 = velocidadDeLaLuzKmHora * velocidadDeLaLuzKmHora;
       let UnidadDeMedidaString = prompt("¿El objeto tiene una masa en Kilogramos si o no?")
       let Respuesta = "Si" || "si" || "sì" || "sI";
       if(Respuesta == UnidadDeMedidaString ){
           let masaString = prompt("Dame la masa de tu objeto en Kilogramos ");
           let masa = Number(masaString);
           if(masa < 0){masa = -1 * masa
              }  
        Resultado = (c2 * masa)*1000;
        console.log("La energia que podemos obtener es de: " + Resultado + " [Joules]");


       }else{
           let masaString = prompt("Dame la masa en gramos ");
           let masa = Number(masaString);
           if(masa < 0){masa = -1 * masa
           }  
           Resultado = (c2 * masa);
           console.log("La energia que podemos obtener es de: " + Resultado + " [Joules]");  
        }
        break;

}