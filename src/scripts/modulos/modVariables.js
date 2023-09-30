function mostrarTablaVariables(lineas) {
    const tablaVariables = document.getElementById('tablaVariables').getElementsByTagName('tbody')[0];
    tablaVariables.innerHTML = '';  // Limpiar el contenido anterior

    // Obtener la cantidad de filas reservadas para el kernel en la tabla de memoria
    const cantidadKernel = parseInt(document.getElementById('kernelValue').innerText);

    const posiciones = {};  // Almacenar las posiciones de las variables

    lineas.forEach((linea, index) => {
        const palabras = linea.split(' ');
        if (palabras.length >= 2 && palabras[0].toLowerCase() === 'nueva') {
            const variable = palabras[1];
            const posicionVariable = (cantidadKernel + index + 1).toString().padStart(4, '0');
            const rowVariables = document.createElement('tr');
            rowVariables.innerHTML = `
                <td>${posicionVariable}</td>
                <td><span>${variable}</span></td>
            `;
            tablaVariables.appendChild(rowVariables);

            // Almacenar la posición de la variable
            posiciones[variable] = posicionVariable;
        }
    });

    // Actualizar las posiciones de las variables en la tabla de variables
    const spans = tablaVariables.getElementsByTagName('span');
    for (let i = 0; i < spans.length; i++) {
        const variable = spans[i].innerText;
        const posicionVariable = posiciones[variable];
        spans[i].parentNode.previousElementSibling.innerText = `${posicionVariable}`;
    }
}
