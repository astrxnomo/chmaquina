function mostrarTablaEtiquetas(lineas) {
    const tablaEtiquetas = document.getElementById('tablaEtiquetas').getElementsByTagName('tbody')[0];
    tablaEtiquetas.innerHTML = '';  // Limpiar el contenido anterior

    // Obtener la cantidad de filas reservadas para el kernel en la tabla de memoria
    const cantidadKernel = parseInt(document.getElementById('kernelValue').innerText);

    const posiciones = {};  // Almacenar las posiciones de las etiquetas

    lineas.forEach((linea, index) => {
        const palabras = linea.split(' ');
        if (palabras.length >= 2 && palabras[0].toLowerCase() === 'etiqueta') {
            const etiqueta = palabras[1];
            const posicionEtiqueta = (cantidadKernel + index + 1).toString().padStart(4, '0');
            const rowEtiqueta = document.createElement('tr');
            rowEtiqueta.innerHTML = `
                <td>${posicionEtiqueta}</td>
                <td><span>${etiqueta}</span></td>
            `;
            tablaEtiquetas.appendChild(rowEtiqueta);

            // Almacenar la posición de la etiqueta
            posiciones[etiqueta] = posicionEtiqueta;
        }
    });

    // Actualizar las posiciones de las etiquetas en la tabla de etiquetas
    const spans = tablaEtiquetas.getElementsByTagName('span');
    for (let i = 0; i < spans.length; i++) {
        const etiqueta = spans[i].innerText;
        const posicionEtiqueta = posiciones[etiqueta];
        spans[i].parentNode.previousElementSibling.innerText = `${posicionEtiqueta}`;
    }
}
