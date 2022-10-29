//Reversa
//Dada una matriz numérica, invierte el orden de los valores, en el lugar. La matriz invertida debe tener la misma longitud, 
//con los elementos existentes movidos a otros índices para que el orden de los elementos se invierta. 
//Trabajar "en el lugar" significa que no puedes utilizar una segunda matriz; mueve los valores dentro de la matriz que se te proporciona. 
//Como siempre, no utilices funciones de matriz integradas como splice().
function inver(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length -1] = temp;
    return arr;
}
const arr = [25, 15];
console.log(inver(arr));


//Girar
//Implementa rotateArr(arr, shiftBy) que acepte matriz y desplazamiento. Desplaza los valores de arr hacia la derecha en esa cantidad. 
//"Envuelve" cualquier valor que cambie el final de la matriz hacia el otro lado, de modo que no se pierda ningún dato. 
//Opera en el lugar: dado ([1,2,3], 1), cambia la matriz a [3,1,2]. No uses funciones integradas.

//Segundo: permitir shiftBy negativo (shift L, no R).

//Tercero: minimiza el uso de memoria. Sin un arreglo nuevo, maneja arreglos/shiftBys en millones.

//Cuarto: minimiza los toques de cada elemento.

function turn(girar){
    temp = girar[2]; 
    girar[2] = girar[1];
    girar[1] = girar[0];
    girar[0] = temp;
    return girar;
}

var girar = [1, 2, 3];
console.log(turn(girar));
//Rango de filtro
//Alan es bueno para descifrar códigos secretos. Un método consiste en eliminar los valores que se encuentran dentro de un rango conocido específico. 
//Dado arr y los valores min y max, conserva solo los valores de la matriz entre min y max. 
//Trabajo en el lugar: devuelve la matriz que se te proporcionó con los valores en el orden original. Sin usar funciones de matriz integradas.

function filtro(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];

    for (var i = 1; i < arr.length; i++){
        if (arr[i] < max){
            max = arr[i];
        }
        if (arr[i] > min){
            min = arr[i];
        }
        sum = sum  + arr[i];
    }

    var arrnew = [max, min];
    return arrnew;
}
console.log(filtro([1, 5, 10,-2]));



//Concat
//Replica el concat() de JavaScript. Crea una función independiente que acepte dos matrices. 
//Devuelve una nueva matriz que contenga los elementos de la primera matriz, seguida de los elementos de la segunda matriz. 
//No alteres las matrices originales. Ej .: arrConcat(['a', 'b'], [1,2]) debería devolver una nueva matriz ['a', 'b', 1,2].

var array1 = ['a', 'b']
var array2 = [1,2];
var newArray = array1.concat(array2);
console.log(newArray);

