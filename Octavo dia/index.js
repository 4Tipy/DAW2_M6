function cambio() {
    let preu_producte = parseInt(prompt("Precio del producto"));
    let preu_lliurat = parseInt(prompt("Dinero entregado"));

    let diff = preu_lliurat - preu_producte;

    let b500 = 0;
    let b200 = 0;
    let b100 = 0;
    let c50 = 0;
    let c20 = 0;
    let c10 = 0;
    let c5 = 0;
    let c1 = 0;

    while (diff > 0) {
        if (diff >= 500) {
            b500++;
            diff -= 500;
        } else if (diff >= 200) {
            b200++;
            diff -= 200;
        } else if (diff >= 100) {
            b100++;
            diff -= 100;
        } else if (diff >= 50) {
            c50++;
            diff -= 50;
        } else if (diff >= 20) {
            c20++;
            diff -= 20;
        } else if (diff >= 10) {
            c10++;
            diff -= 10;
        } else if (diff >= 5) {
            c5++;
            diff -= 5;
        } else if (diff >= 1) {
            c1++;
            diff -= 1;
        }
    }

    console.log(`Cambio:
    Billetes de $500: ${b500}
    Billetes de $200: ${b200}
    Billetes de $100: ${b100}
    Monedas de $50: ${c50}
    Monedas de $20: ${c20}
    Monedas de $10: ${c10}
    Monedas de $5: ${c5}
    Monedas de $1: ${c1}`);
}
