piramideTable(){
    let numFilas = parseInt(prompt("Inserta el numero de filas: "));
    let numCol = parseInt(prompt("Inserta el numero de columnas: "));

    const tabla = document.createElement("table");

    for (let i = 1; i <= numFilas; i++) {
        const fila = document.createElement("tr");
        for (let j = 1; j <= numCol; j++) {
          const celda = document.createElement("td");
          celda.textContent = `${i}, ${j}`;
          fila.appendChild(celda);
          celda.style.border = "1px solid black";
        }
        fila.style.border = "1px solid black";
        tabla.appendChild(fila);
    }

    document.body.appendChild(tabla);
}