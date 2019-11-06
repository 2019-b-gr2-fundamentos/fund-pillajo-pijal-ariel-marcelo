console.log("\tCalculadora");
const OpcionesString = prompt("Presione:\n1 para Suma.\n2 para Resta.\n3 para Multiplicacion.\n4 para Division.");
const Opciones = Number(OpcionesString);
const UnoaCuatro = (Opciones==1 || Opciones==2 || Opciones==3||Opciones==4);

if (UnoaCuatro){

    const NumUnoString = prompt("Ingrese un numero: ");
    const NumDosString = prompt("Ingrese un numero: ");
    const NumUno = Number(NumUnoString);
    const NumDos = Number(NumDosString);

    if(Opciones ==1){
        console.log(NumUno+NumDos);
    }

    if(Opciones==2){
        console.log(NumUno-NumDos);
    }

    if(Opciones==3){
        console.log(NumUno*NumDos);
    }
    
    if(Opciones==4){
        console.log(NumUno/NumDos);
    }
}else{
    console.log("DATO INCORRECTO");
}
