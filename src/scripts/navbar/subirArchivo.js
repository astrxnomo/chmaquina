function subirArchivo() {
    const archivoInput = document.getElementById('archivoInput');
    archivoInput.addEventListener('change', leerArchivo);
    archivoInput.click();
}

function leerArchivo(event) {
    const archivo = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const contenido = e.target.result;
        const lineas = contenido.split('\n');
        mostrarEnTabla(lineas);
    };

    reader.readAsText(archivo);
}

function mostrarEnTabla(lineas) {
    const tablaInstrucciones = document.getElementById('instruccionesProgramaBody');
    const tablaVariables = document.getElementById('tablaVariables').getElementsByTagName('tbody')[0];

    const posiciones = {};  // Almacenar las posiciones de las variables

    let posicion = 1;  // Inicializamos la posición

    lineas.forEach((linea, index) => {
        const palabras = linea.split(' ');
        if (palabras.length >= 2 && palabras[0].toLowerCase() === 'nueva') {
            const variable = palabras[1];
            const rowVariables = document.createElement('tr');
            rowVariables.innerHTML = `
                <td>${posicion.toString().padStart(4, '0')}</td>
                <td><span>${variable}</span></td>
            `;
            tablaVariables.appendChild(rowVariables);

            // Almacenar la posición de la variable
            posiciones[variable] = index + 1;

            posicion++;  // Incrementamos la posición solo para las variables 'nueva'
        }

        const rowInstrucciones = document.createElement('tr');
        rowInstrucciones.innerHTML = `
            <td>${(index + 1).toString().padStart(4, '0')}</td>
            <td>${linea}</td>
        `;
        tablaInstrucciones.appendChild(rowInstrucciones);
    });

    // Actualizar las posiciones de las variables en la tabla de variables
    const spans = tablaVariables.getElementsByTagName('span');
    for (let i = 0; i < spans.length; i++) {
        const variable = spans[i].innerText;
        const posicionVariable = posiciones[variable];
        spans[i].parentNode.previousElementSibling.innerText = `${posicionVariable.toString().padStart(4, '0')}`;
    }
}