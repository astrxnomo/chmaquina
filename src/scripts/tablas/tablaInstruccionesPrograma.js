function mostrarTablaInstrucciones(lineas) {
    const tablaInstrucciones = document.getElementById('instruccionesProgramaBody');
    tablaInstrucciones.innerHTML = '';  // Limpiar el contenido anterior

    // Obtener la cantidad de filas reservadas para el kernel en la tabla de memoria
    const cantidadKernel = parseInt(document.getElementById('kernelValue').innerText);

    lineas.forEach((linea, index) => {
        const posicionMemoria = cantidadKernel + index + 1;  // Número de posición de memoria (empezando después del kernel)
        const rowInstrucciones = document.createElement('tr');
        rowInstrucciones.innerHTML = `
            <td>${posicionMemoria.toString().padStart(4, '0')}</td>
            <td>${linea}</td>
        `;
        tablaInstrucciones.appendChild(rowInstrucciones);
    });
}
