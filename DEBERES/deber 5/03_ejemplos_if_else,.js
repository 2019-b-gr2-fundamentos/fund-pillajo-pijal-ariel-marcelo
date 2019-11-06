//////////if 
// test de personalidad
// responde estas afirmaciones del 1 al 10 que tan deacuerdo estas con ellas
// es muy tipico pero me parecio divertido hacerlo


const INTRODUCCION = "Bienvenido porfavor escriba del 1 al 10 que tan de acuerdo esta con las siguientes afrimaciones" + "\n" + "Probemos: Estoy Listo" 
const Pregunta1 = "Es mejor no tener internet que estar solo/a"
const Pregunta2 = "Es mejor sacrificarse por otros que ayudarte solo/a"
let AfirmacionString = prompt(INTRODUCCION);
let Afirmacion = Number(AfirmacionString);
let Respuesta = 0;
let importanciaPregunta = 0;
const condicion = Afirmacion >= 7 && Afirmacion <=10;
const ValorMaximoPre = 10;
const RespuestaA = "Eres una persona desinteresada y realmente le prestas atencion a los demas"
const RespuestaB = "Eres mas egoista que los demas tiendes a poner a los demas en segundo lugar"
if(condicion){
     AfirmacionString = prompt(Pregunta1);
     Afirmacion = Number(AfirmacionString);
     if(condicion){
       
        importanciaPregunta = 2;
        Respuesta = Respuesta + ((Afirmacion*importanciaPregunta)/ValorMaximoPre);
        AfirmacionString = prompt(Pregunta2);
        Afirmacion = Number(AfirmacionString);
        if(condicion){
          importanciaPregunta = 3;  
          Respuesta = Respuesta + ((Afirmacion*importanciaPregunta)/ValorMaximoPre);
            if(Respuesta > 2){
              console.log(RespuestaA);
            }else{
              console.log(RespuestaB);
            }
        }else{

        }
       
     }else{

     }
}else{
  console.log("MMM creo q no tienes ganas mejor otro dia");
}