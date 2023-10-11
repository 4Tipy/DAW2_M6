function media(){
    let a = parseInt (prompt("Elige un numero"));
    let b = parseInt  (prompt("Elige el segundo numero"));
    let c = parseInt ( prompt("Elige el tercer numero"));
    let operación = (a+b+c)/3;
    console.log("la media es :" + operación)
}

function mediana(){
    let a = parseInt (prompt("Elige un numero"));
    let b = parseInt  (prompt("Elige el segundo numero"));
    let c = parseInt ( prompt("Elige el tercer numero"));

    let d =  [a, b, c];
    d.sort();

    const longitud = d.length;
    let numeroMitad;

    if(longitud % 2 == 0){

    }
}
function maximo(){
    let a = parseInt (prompt("Elige un numero"));
    let b = parseInt  (prompt("Elige el segundo numero"));
    let c = parseInt ( prompt("Elige el tercer numero"));

    let d = [a,b,c];
    console.log(Math.max.apply(null, d));
}

function minimo(){
    let a = parseInt (prompt("Elige un numero"));
    let b = parseInt  (prompt("Elige el segundo numero"));
    let c = parseInt ( prompt("Elige el tercer numero"));

    let d = [a,b,c];
    console.log(Math.min.apply(null, d));
}
    