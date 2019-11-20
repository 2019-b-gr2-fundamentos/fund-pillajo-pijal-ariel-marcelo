// 1)  Crear un arreglo de 5 elementos}
// 2) Cada elemento tiene 1 o 0
// Ej: [0, 0, 1, 1, 0]
// 3) Exista al menos un elemento "1"
// Ej: [0,0,0,0,0] No es valido
// Ej [0, 0, 0, 1, 0]

/*

const arreglo = [];


for(let indice = 0; indice < 5; indice++  ){

arreglo[indice] = Math.floor(Math.random()*2);
console.log(" Arreglo Posicion" + indice +  " = " + arreglo[indice] );


}

*/

/*

definir numeros de jugadores 
asignar randonicamente si el jugador tiene o no un floron
verificar si existe al menos un floro 
Adivinar donde esta el floron

*/



//Asignar a un solo jugador el floron


const floron = [0,0,0,0];

let indice = Math.floor(Math.random()*4)

floron[indice] = 1;

console.log(floron);


// EXISTE EL fLORON???
let arregloFloron1 = [0,0,0,1,0];
    let existeFloron1 = false;
    for(let i = 0; i<5; i++){

    if(arregloFloron1[i] == 1){ 
    existeFloron1 = true;
  }
}


// por esta razon no ponemos un else seguido del if nos votaria falso
let arregloFloron = [0,0,0,1,0];
    let existeFloron;
    
for(let i = 0; i<5; i++){


if(arregloFloron[i] == 1){ 
    existeFloron = true;
  }else{
      existeFloron = false
  }
}







