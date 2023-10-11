function salida(){
    let resultado = document.getElementById("valor").value;
    alert(resultado);
}

function numeroElegir(){
    let numeroElegido = document.getElementById("tabla").value;
        if(numeroElegido < 1 || numeroElegido > 10){
            console.log("Ingresa un numero entre 1 y 10");
        } else {
            for(let x = 1; x <= 10; x++){
                console.log(`${x} x ${numeroElegido} = ${x * numeroElegido}`);
            }
        }
}

function pepe(){
    alert("El pepe");
}

function pipo(){
    alert("aloo");
}