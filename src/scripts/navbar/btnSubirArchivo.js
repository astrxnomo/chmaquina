let instruccionesMemoria = [];
function subirArchivo() {
    const archivoInput = document.getElementById('archivoInput');
    archivoInput.addEventListener('change', function(event) {
        const archivo = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const contenido = e.target.result;
            const lineas = contenido.split('\n');

            // Obtener el número de instrucciones
            const numInstrucciones = lineas.length;

            // Obtener el valor de la memoria desde el slider
            const memoriaAsignada = parseInt(document.getElementById('memoriaSlider').value);

            if (numInstrucciones > memoriaAsignada) {
                alert('El archivo tiene más instrucciones de las permitidas por la memoria asignada en la configuración del sistema.');
                archivoInput.value = '';  // Limpiar la selección del archivo
                return;  // No cargar el archivo
            }

            // Si no excede la memoria asignada, leer y mostrar el archivo
            leerYMostrarArchivo(event);

            // Deshabilitar el botón de configuración del sistema
            const botonConfiguracion = document.getElementById('configuracionSistemaBtn');
            botonConfiguracion.disabled = true;
        };

        reader.readAsText(archivo);
    });
    archivoInput.click();
}



function leerYMostrarArchivo(event) {
    const archivo = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const contenido = e.target.result;
        const lineas = contenido.split('\n');

        // Guardar las instrucciones en la variable global
        instruccionesMemoria = lineas.map((linea, index) => {
            return `${linea}`;
        });

        mostrarTablaInstrucciones(lineas);
        mostrarTablaVariables(lineas);
        mostrarTablaEtiquetas(lineas);
        guardarConfiguracionSistema();  // Actualizar la tabla de memoria con las instrucciones
    };

    reader.readAsText(archivo);
}




