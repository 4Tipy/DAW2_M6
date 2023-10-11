// Numero mas cercano al 100 entre dos numeros

function proximoAlCien(){
    let a = Math.abs(prompt("Elige un numero"));
    let b = Math.abs(prompt("Elige el segundo numero"));

    if( a-100 > b-100) {
        return console.log("El numero mas cercano es: " + a)
    }
    if (a-100< b-100){
        return console.log("El numero mas grande es: " + b)
    }
}
//  Pedir 3 numeros y sumarle 1 a los segundos
function horaRara(){

    let a = parseInt (prompt("Elige la hora"));
    let b = parseInt  (prompt("Elige los minutos"));
    let c = parseInt ( prompt("Elige los segundos"));

    let fecha = new Date(2,15,2022, a, b ,c + 1);


    console.log(fecha  + "\n" + fecha.getSeconds());

}

// Tratar una data valida
function validar(){

    let año = parseInt (prompt("Elige la año"));
    let  mes = parseInt  (prompt("Elige los mes"));
    let dia = parseInt ( prompt("Elige los dia"));

    let fecha = new Date (año, mes, dia)
    if(fecha.getFullYear == fecha.setFullYear  && fecha.getMonth == mes && fecha.getDay == dia) {
        console.log("La fecha es valida: " + fecha)
    } else {
        console.log("La fecha no es valida")
    }

}


