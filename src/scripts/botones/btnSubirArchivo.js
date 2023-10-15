let instruccionesMemoria = [];

function subirArchivo() {
    const archivoInput = document.getElementById('archivoInput');
    archivoInput.value = ''; // Limpiar el valor para que el evento change se dispare incluso si se selecciona el mismo archivo
    archivoInput.addEventListener('change', function(event) {
        const archivo = event.target.files[0];
        leerYMostrarArchivo(archivo);

    });
    archivoInput.click();
}

function leerYMostrarArchivo(archivo) {
    const reader = new FileReader();

    reader.onload = function(e) {
        const contenido = e.target.result;
        const lineas = contenido.split('\n');
        // Obtener el número de instrucciones
        const numInstrucciones = lineas.length;
        // Obtener el valor de la memoria desde el slider
        const memoriaAsignada = parseInt(document.getElementById('memoriaSlider').value);

        if (numInstrucciones > memoriaAsignada) {
            alert('No hay memoria suficiente en el sistema para cargar el archivo el programa');
            return;  // No cargar el archivo
        }

        // Verificar la sintaxis antes de continuar
        if (!verificarSintaxis(lineas)) {
            return;  // No cargar el archivo
        }

        // Guardar las instrucciones en la variable global
        instruccionesMemoria = lineas.map((linea, index) => `${linea}`);

        mostrarTablaInstrucciones(lineas);
        mostrarTablaVariables(lineas);
        mostrarTablaEtiquetas(lineas);
        guardarConfiguracionSistema();  // Actualizar la tabla de memoria con las instrucciones

        // Deshabilitar el botón de configuración del sistema
        const botonConfiguracion = document.getElementById('configuracionSistemaBtn');
        botonConfiguracion.disabled = true;
    };

    reader.readAsText(archivo);
}



