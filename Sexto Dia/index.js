function pasarNumeros() {
    let a = parseInt(prompt("Elige un numero"));

    function binario() {
        let binarioA = a; 
        if (binarioA === 0) {
            console.log("Programa cancelado");
        } else {
            let binario = "";

            while (binarioA !== 0) {
                let residuo = binarioA % 2; // Calcula el residuo al dividir a por 2
                binario = residuo + binario; // Agrega el residuo a la cadena binaria
                binarioA = Math.floor(binarioA / 2); // Divide a entre 2 y redondea hacia abajo
            }
            console.log("El número en binario es: " + binario);
        }
    }

    function octal() {
        let octalA = a; 
        if (octalA === 0) {
            console.log("Programa cancelado");
        } else {
            let octal = "";

            while (octalA !== 0) {
                let residuo = octalA % 8;
                octal = residuo + octal;
                octalA = Math.floor(octalA / 8);
            }

            // Imprime el resultado octal
            console.log("El número en octal es: " + octal);
        }
    }

    function hexadecimal() {
        let hexadecimalA = a; 
        if (hexadecimalA === 0) {
            console.log("Programa cancelado");
        } else {
            let hexadecimal = "";
            const digitosHexadecimales = "0123456789ABCDEF";
    
            while (hexadecimalA !== 0) {
                let residuo = hexadecimalA % 16;
                hexadecimal = digitosHexadecimales[residuo] + hexadecimal;
                hexadecimalA = Math.floor(hexadecimalA / 16);
            }
    
            // Imprime el resultado hexadecimal
            console.log("El número en hexadecimal es: " + hexadecimal);
        }
    }

    binario();
    octal();
    hexadecimal();
}

pasarNumeros();
