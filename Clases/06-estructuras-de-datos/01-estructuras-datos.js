//  ./ --> Relativo a donde esta el archivo
// si no tiene esta notacion al inicio, busca en los note-mojos donde estan nuestras dependencias
// booleano
// cuerda
// nulo -> objeto
// número
// PERSONA
// CASI EN TODOS LOS LENGUAJES
// Estructura -> Estructura de datos
// Clase -> Estructura de datos -> Metodos!
// ANIMAL -> nombre cientifico, color principal
// fecha nacimiento, peso, genero, altura 
var edad = 20;
var ejemploEstructura = {
    'nombreCientifico': 'canis lupus familiaris',
    "llave": "valor",
    enojo: undefined,
    edadActual: edad,
    noEsNecesario: true
};
ejemploEstructura;
// Estructura de datos en lenguaje NO TIPADO
var poliPerro = {
    nombreCientifico: 'Canis Lupus Familiaris',
    nombre: 'Grandote',
    clan: 'Poliperro',
    edad: 10,
    hijos: null,
    perritas: ['Manuela', 'Zoraida'],
    vacunado: true
};
console.log(poliPerro.nombre); // Canis Lupus Familiaris
// Estructura de datos en lenguaje TIPADO
var poliPerroAmarillo = {
    nombreCientifico: 'Canis Lupus Familiaris',
    nombre: 'Amarillo',
    clan: null
};
poliPerroAmarillo;
var dueniopoliPerroAmarillo = {
    // Al usar Ctrl + Space , sabemos que datos son oligatorios a llenar
    nombres: "Ariel",
    apellidos: "Pillajo",
    fechaNacimiento: 2,
    mascotasPerros: [poliPerroAmarillo]
};
// Guardar datos en una estructura de datos
poliPerroAmarillo.duenio = dueniopoliPerroAmarillo;
poliPerroAmarillo.edad = 4;
poliPerroAmarillo.vacunado = true;
// Accerderr a los datos de la estructura 
console.log(poliPerroAmarillo.duenio.nombres);
console.log(poliPerroAmarillo.duenio.apellidos);
console.log(poliPerroAmarillo.nombre);
console.log(poliPerroAmarillo.edad);
