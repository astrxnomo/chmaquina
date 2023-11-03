function mostrarTablaMemoria() {
    // Obtener los valores de memoria, kernel y las cantidades especificadas
    const cantidadMemoria = parseInt(document.getElementById('memoriaSlider').value);
    const cantidadKernel = parseInt(document.getElementById('kernelSlider').value);

    // Limpiar la tabla de memoria
    const tablaMemoria = document.getElementById('tablaMemoria').getElementsByTagName('tbody')[0];
    tablaMemoria.innerHTML = '';

    // Agregar fila para la posición "0000" reservada para el acumulador
    const rowAcumulador = document.createElement('tr');
    rowAcumulador.innerHTML = `
        <td><i class="fa-solid fa-layer-group fa-sm" style="color: #1f71ff;"></i> 0000</td>
        <td>Contenido del acumulador</td>
    `;
    tablaMemoria.appendChild(rowAcumulador);

    // Agregar filas para el kernel desde la posición 0001
    for (let i = 1; i <= cantidadKernel; i++) {
        const rowKernel = document.createElement('tr');
        rowKernel.innerHTML = `
            <td><i class="fa-solid fa-microchip fa-sm" style="color: #1f71ff;"></i> ${i.toString().padStart(4, '0')}</td>
            <td>CHSOS V2023</td>
        `;
        tablaMemoria.appendChild(rowKernel);
    }

    // Agregar filas para la memoria después del kernel
    for (let i = cantidadKernel + 1; i <= cantidadKernel + cantidadMemoria; i++) {
        const posicionMemoria = i - cantidadKernel;  // Calcular la posición relativa de la memoria
        const contenidoMemoria = instruccionesMemoria[posicionMemoria - 1] || '';
        const contenido = contenidoMemoria !== '' ? `${contenidoMemoria}` : '';
        const rowMemoria = document.createElement('tr');
        rowMemoria.innerHTML = `
            <td><i class="fa-solid fa-memory fa-sm" style="color: #1f71ff;"></i> ${i.toString().padStart(4, '0')}</td>
            <td>${contenido}</td>
        `;
        tablaMemoria.appendChild(rowMemoria);
    }

}