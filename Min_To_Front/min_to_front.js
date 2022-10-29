//Min al comienzo
//Dada una matriz de valores comparables, mueve el elemento más bajo al comienzo de la matriz, desplazando hacia atrás los elementos que estaban antes. 
//De lo contrario, no cambies el orden de la matriz. Dado [4,2,1,3,5], cámbialo a [1,4,2,3,5] y devuélvelo. Como siempre, haz esto sin usar funciones integradas.

function start(x){
    var temp = x [x.length - 3];
    var j = x[0];
    x[x.length -3] = x[1];
    x[1] = temp;

    x[0] = x[x.length -4];
    x[x.length - 4] = j;
    return x;
}

var x = [4,2,1,3,5];
console.log(start(x));