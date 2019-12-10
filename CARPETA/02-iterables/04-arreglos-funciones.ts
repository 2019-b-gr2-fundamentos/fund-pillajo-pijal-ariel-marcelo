// Declarar un arreglo
const arregloNumeros = [1,2,3,4,5,6,7];
//  Para Aceder 
// Necesito: Inice que represente la posicion del arreglo en este caso la posicion 6
console.log(arregloNumeros[6]); // Nos devuelve 7 ya que cuenta desde el 0 
// Añadir al Final 
// Añadir 11 ---> [1,2,3,4,5,6,7,11]
arregloNumeros.push(11);
// borrar al final [1,2,3,4,5,6,7]
arregloNumeros.pop();
// Añadir en un indice 
// elemento 
arregloNumeros.splice(0,  0, 1.2);// remueve de ser necesario y pone un elemento en su lugar
//               (posicion, 0 para no borrar solo mover de su posicion, valor a agregar)
console.log(arregloNumeros);
//  Borrar 
arregloNumeros.splice(2, 1); // (posicion, 1 para borrar el elemento)
console.log(arregloNumeros);
// Buscar el indice de un elemento 5
arregloNumeros.indexOf(5); // marca el valor del indice, pero si no encuentra el elemento manda -1

arregloNumeros.splice(0,  1, 999); // es = arregloNumeros[0] = 1;
console.log(arregloNumeros);

// nota Ctrl + TAB  nos permite abrir carpetas o archivos que este abiertas


// 1) se nos da un Arreglo
// 2) se nos da un Indice 
// 3) se nos puede dar un elemento  Elemento
// 4) encontrar  el indice en el arreglo 
// 5) borrar o desplazar un elemento 
// 6) colocar o no colocar un nuevo elemento 























































































































