// Variables globales
let isPasoAPaso = false; // Indica si estamos en modo paso a paso
let isEjecutando = false; // Indica si el programa está en ejecución continua

let acumulador = 0;
let variables = {}; // Objeto para almacenar variables
let memoria = []; // Array para almacenar la memoria
let etiquetas = {}; // Objeto para almacenar etiquetas y sus posiciones
let posicionInstruccionActual = 0; // Posición actual en el programa

const mostrarMemoriaBtn = document.getElementById('ejecutarBtn');

// Función para ejecutar una sola instrucción
function ejecutarInstruccion(instruccion) {
    // Implementa la lógica para ejecutar la instrucción y actualizar el acumulador, memoria y variables.
    // Considera los diferentes tipos de instrucciones y su efecto en el estado del programa.
}

// Función para ejecutar el programa paso a paso
function ejecutarPasoAPaso() {
    if (!isEjecutando) {
        isPasoAPaso = true;
        ejecutarUnaInstruccion();
    }
}

// Función para ejecutar el programa continuamente
function ejecutarContinuamente() {
    if (isEjecutando) {
        // Implementa la lógica para ejecutar el programa de manera continua
    }
}

// Otras funciones de control de flujo, manejo de etiquetas, funciones, etc.

// Función para actualizar la interfaz de usuario
function actualizarInterfaz() {
    // Implementa la lógica para reflejar el estado actual del programa en la interfaz de usuario.
}

// Función para mostrar el contenido de la memoria y las variables
function mostrarTablaMemoria() {
    const tablaMemoria = document.getElementById('tablaMemoria').getElementsByTagName('tbody')[0];

    // Limpia la tabla de memoria
    tablaMemoria.innerHTML = '';

    // Agrega fila para la posición "0000" reservada para el acumulador
    agregarFilaMemoria(tablaMemoria, '0000', 'Contenido del acumulador');

    // Agrega filas para el kernel desde la posición 0001
    const cantidadKernel = parseInt(document.getElementById('kernelSlider').value);
    for (let i = 1; i <= cantidadKernel; i++) {
        agregarFilaMemoria(tablaMemoria, i.toString().padStart(4, '0'), 'CHSOS V2023');
    }

    // Agrega filas para la memoria después del kernel
    const cantidadMemoria = parseInt(document.getElementById('memoriaSlider').value);
    for (let i = cantidadKernel + 1; i <= cantidadKernel + cantidadMemoria; i++) {
        const posicionMemoria = i - cantidadKernel; // Calcular la posición relativa de la memoria
        const contenidoMemoria = instruccionesMemoria[posicionMemoria - 1] || '';
        agregarFilaMemoria(tablaMemoria, i.toString().padStart(4, '0'), contenidoMemoria);
    }

    // Agregar filas para las variables
    for (const variable in variables) {
        agregarFilaMemoria(tablaMemoria, 'Variable', variables[variable]);
    }
    inicializarVariablesEnMemoria
}

// Función auxiliar para agregar filas a la tabla de memoria
function agregarFilaMemoria(tabla, direccion, contenido) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><i class="fa-solid fa-memory fa-sm" style="color: #1f71ff;"></i> ${direccion}</td>
        <td>${contenido}</td>
    `;
    tabla.appendChild(row);
}

// Agrega un evento de clic al botón
mostrarMemoriaBtn.addEventListener('click', function () {
    mostrarTablaMemoria();
    // Puedes agregar más lógica aquí si necesitas hacer algo adicional cuando se muestra la memoria.
});

function inicializarVariablesEnMemoria() {
    const tablaMemoria = document.getElementById('tablaMemoria').getElementsByTagName('tbody')[0];

    for (const variable in variables) {
        const rowVariable = document.createElement('tr');
        rowVariable.innerHTML = `
            <td><i class="fa-solid fa-memory fa-sm" style="color: #1f71ff;"></i> Variable ${variable}</td>
            <td>${variables[variable]}</td>
        `;
        tablaMemoria.appendChild(rowVariable);
    }
}