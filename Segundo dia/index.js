// numeroElegir()

let Elegir2 = prompt("Elige un numero");

    function fib(){
        let a = 1;
        let b = 1;
        for (let x = 3; x <= Elegir2; x++){
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }

console.log(fib());