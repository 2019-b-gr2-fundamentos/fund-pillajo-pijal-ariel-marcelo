// 1)  Crear un arreglo de 5 elementos}
// 2) Cada elemento tiene 1 o 0
// Ej: [0, 0, 1, 1, 0]
// 3) Exista al menos un elemento "1"
// Ej: [0,0,0,0,0] No es valido
// Ej [0, 0, 0, 1, 0]



const arreglo = [];


for(let indice = 0; indice < 5; indice++  ){

arreglo[indice] = Math.floor(Math.random()*2);
console.log(" Arreglo Posicion" + indice +  " = " + arreglo[indice] );


}

