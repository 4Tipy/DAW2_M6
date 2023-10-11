function telefonica() {
    let hor = parseInt(prompt("Introduce las horas"));
    let min = parseInt(prompt("Ahora los minutos"));
    let seg = parseInt(prompt("y para acabar los segundos"));


    let segT = (hor * 3600) + (min * 60) + seg; 
    let costoEstablecimiento = 0.10; 
    let costoPorSegundo = 0.05 / 60; 

    let costoTotal = costoEstablecimiento + (segT * costoPorSegundo);
    
    console.log("El costo de la llamada: " + costoTotal.toFixed(2) + " euros.");
}

function colores() {

    let a = parseInt(prompt("Elige un numero"));
    let b = parseInt(prompt("Elige un numero"));
    let c = parseInt(prompt("Elige un numero"));

    if (a <= 15) {
        console.log("0" + a.toString(16))
    } else {
        console.log(a.toString(16))
    }
    if (b <= 15) {
        console.log("0" + b.toString(16))
    } else {
        console.log(a.toString(16))
    }
    if (c <= 15) {
        console.log("0" + c.toString(16))
    } else {
        console.log(a.toString(16))
    }

}
