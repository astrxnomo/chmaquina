function guardarConfiguracionSistema() {
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

// Esta función se llama cuando se cambia el valor del slider de memoria
function updateMemoriaValue(value) {
    document.getElementById('memoriaValue').innerText = value;
}

// Esta función se llama cuando se cambia el valor del slider del kernel
function updateKernelValue(value) {
    document.getElementById('kernelValue').innerText = value;
}

// Esta función se llama cuando se presiona una tecla en el span para editar
function onSpanKeyPress(event, element) {
    if (event.key === 'Enter') {
        finishEditing(element);
    }
}

// Esta función se llama cuando se hace doble clic en el span para editarlo
function startEditing(element) {
    element.contentEditable = true;
    element.addEventListener('keypress', (event) => onSpanKeyPress(event, element));
    element.focus();

    // Deshabilitar los sliders mientras se edita
    document.getElementById('memoriaSlider').disabled = true;
    document.getElementById('kernelSlider').disabled = true;
}

// Esta función se llama cuando se presiona "Enter" o se pierde el foco para confirmar la edición
function finishEditing(element) {
    element.contentEditable = false;
    element.removeEventListener('keypress', (event) => onSpanKeyPress(event, element));

    // Obtener el valor del span y convertirlo a número
    let newValue = parseInt(element.innerText);

    // Obtener el rango permitido para este elemento (mismo rango que el slider)
    const sliderId = element.id.replace('Value', 'Slider');
    const minRange = parseInt(document.getElementById(sliderId).getAttribute('min'));
    const maxRange = parseInt(document.getElementById(sliderId).getAttribute('max'));

    // Asegurarse de que el valor esté dentro del rango permitido
    newValue = Math.max(minRange, Math.min(maxRange, newValue));

    // Actualizar el valor del span y el slider
    element.innerText = newValue;
    document.getElementById(sliderId).value = newValue;

    // Habilitar los sliders después de la edición
    document.getElementById('memoriaSlider').disabled = false;
    document.getElementById('kernelSlider').disabled = false;
}
