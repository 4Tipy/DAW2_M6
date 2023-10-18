function piramideTable(){
    let numFilas = parseInt(prompt("Inserta el numero de filas: "));
    let numCol = parseInt(prompt("Inserta el numero de columnas: "));
    
    while(numFilas % 2 == 0){
      console.log("introduce un numero impar");
    }

    const tabla = document.createElement("table");
    let mitadFilas = Math.ceil(numFilas/2);

    for (let i = 1; i <= mitadFilas; i++) {
      const fila = document.createElement("tr");
      let numCeldasRojas = 2 * i - 1;
      let numCeldasVacias = (numCol - numCeldasRojas) / 2;

      for (let j = 1; j <= numCeldasVacias; j++) {
          const celdaVacia = document.createElement("td");
          fila.appendChild(celdaVacia);
      }

      for (let j = 1; j <= numCeldasRojas; j++) {
          const celdaRoja = document.createElement("td");
          celdaRoja.style.backgroundColor = "red";
          celdaRoja.style.width = "30px";
          celdaRoja.style.height = "30px";
          celdaRoja.style.border = "1px solid black";
          fila.appendChild(celdaRoja);
      }

      for (let j = 1; j <= numCeldasVacias; j++) {
          const celdaVacia = document.createElement("td");
          fila.appendChild(celdaVacia);
      }

      tabla.appendChild(fila);
    }

    // for (let i = 1; i <= numFilas; i++) {
    //     const fila = document.createElement("tr");
    //     for (let j = 1; j <= numCol; j++) {
    //       const celda = document.createElement("td");
    //       fila.style.backgroundColor="red";
    //       celda.style.width="30px"
    //       celda.style.height="30px"
    //       celda.style.border = "1px solid black";
    //       fila.appendChild(celda);
    //     }
    //     fila.style.border = "1px solid black";
    //     tabla.appendChild(fila);
    // }

    document.body.appendChild(tabla);

}