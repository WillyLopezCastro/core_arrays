//Push al frente. 
//Dada una matriz y un valor adicional, inserta este valor al principio de la matriz. 
//Haz esto sin utilizar ningún método de matriz incorporado.
function pushFront(matrix, valor){
        for (var i = matrix.length; i > 0; i--){
            matrix[i] = matrix[i-1]
        }
        matrix[0] = valor
}
const arr = [22, "Hola", true, 55, "Jose"];
pushFront(arr, "Maria")

console.log(arr);


//Pop al frente.
// Dada una matriz, elimina y devuelve el valor al principio de la matriz. 
//Haz esto sin utilizar ningún método de matriz incorporado, excepto pop().
function popFront(matrix){
    var j = matrix[0];
    for (var i = 0; i < matrix.length; i++){
        matrix[i] = matrix[i+1]
    }
    matrix.length = matrix.length-1
    return j
}

const colors = ["Azul", "Verde", "Negro", "Amarillo"];


console.log(popFront(colors));
console.log(colors);

//Insertar en.
// Dado una matriz, índice y valor adicional, inserta el valor en la matriz en el índice dado. 
//Haz esto sin utilizar métodos de matriz integrados. Puedes pensar en pushFront(arr, val) como equivalente a insertAt(arr, 0, val).

function pushFront(arr, val){
    
    for (var i = arr.length; i > 0; i--){
        arr[i] = val[i-1]
    }
    arr[1] = val
}

const arrys = ["arr", "val"];
pushFront(arrys, "0");

console.log(arrys);


//Eliminar en. 
//Dada una matriz y un índice en una matriz, elimina y devuelve el valor de la matriz en ese índice. 
//Haz esto sin usar métodos de matriz integrados, excepto pop(). Piensa en popFront(arr) como equivalente a removeAt(arr, 0).

function pushFront(arr, val){
    var n = arr[0];
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i+1]
    }
    arr.length = arr.length-1
    return n
}

const animals = ["cat", "dog"];

console.log(pushFront(animals));
console.log(animals);

//Pares de intercambio. 
//Intercambia posiciones de pares sucesivos de los valores de una matriz dada. 
//Si la longitud es impar, no cambies el elemento final. Para [1,2,3,4], devuelve [2,1,4,3]. 
//Por ejemplo, cambia la entrada ["Brendan", true, 42] a [true, "Brendan", 42]. 
//Al igual que con todos los desafíos de arreglos, hazlo sin utilizar ningún método de arreglo incorporado.
var cambio = ["Brendan", true, 42];
temp = cambio[0];
cambio[0] = cambio[1];
cambio[1] = temp;

console.log(cambio);


//Eliminar duplicados. 
//Sara está buscando contratar a un desarrollador web increíble y ha recibido postulaciones de varias fuentes. 
//Su asistente los ordenó alfabéticamente, pero notó algunos duplicados. Dada una matriz ordenada, elimina los valores duplicados. 
//Debido a que los elementos de la matriz ya están en orden, todos los valores duplicados se agruparán. 
//Al igual que con todos estos desafíos de arreglos, hazlo sin utilizar ningún método de arreglo incorporado.

//Segundo: resuelve esto sin usar ningún bucle anidado.

function remove(array){
    let mySet = new Set(array);
    return Array.from(mySet)
}

array = [1,2,5,3,2,3,4,5,1,1,6,6,7];
console.log(remove(array));