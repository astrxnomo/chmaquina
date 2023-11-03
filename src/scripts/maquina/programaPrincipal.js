import * as operaciones from './operaciones.js';

document.addEventListener('DOMContentLoaded', function () {
    const ejecutarBtn = document.getElementById('ejecutarBtn');
    const pausarBtn = document.getElementById('pausarBtn');
    const pasoapasoBtn = document.getElementById('pasoapasoBtn');

    ejecutarBtn.addEventListener('click', function() {
        ejecutarProgramaContinuo();
    });

    pausarBtn.addEventListener('click', function() {
        pausarPrograma();
    });

    pasoapasoBtn.addEventListener('click', function() {
        ejecutarInstruccion();
    });

    // Otro código de inicialización, si es necesario
});

let posicionInstruccionActual = 0;

// Definir una variable global para el acumulador
export let acumulador = 0;
export let variables = {};


// Actualizar el valor del acumulador en la interfaz de usuario
function actualizarValorAcumulador() {
    const acumuladorElement = document.getElementById('acumuladorValue');
    acumuladorElement.textContent = `Acumulador: ${acumulador}`;
}
// Llama a esta función cada vez que el valor del acumulador cambie
// Inicializa las variables como un objeto vacío

function ejecutarInstruccion() {
    while (posicionInstruccionActual < instruccionesMemoria.length) {
        const instruccion = instruccionesMemoria[posicionInstruccionActual];

        // Si la instrucción comienza con "//", es un comentario, así que la ignoramos
        if (instruccion.trim().startsWith('//')) {
            posicionInstruccionActual++;
            continue; // Saltar esta iteración y pasar a la siguiente instrucción
        }

        // Divide la instrucción en palabras (operación y argumentos)
        const palabras = instruccion.trim().split(/\s+/);
        const operacion = palabras[0].toLowerCase(); // Convierte a minúsculas para evitar problemas de mayúsculas/minúsculas
        const argumentos = palabras.slice(1);

        if (operaciones[operacion]) {
            operaciones[operacion](acumulador, variables, ...argumentos);
        } else {
            console.error(`Error: Operación desconocida - ${operacion}`);
        }

        posicionInstruccionActual++;
    }

    // Has llegado al final del programa.
    alert('Programa finalizado.');
}


let programaEnEjecucion = false; // Variable para rastrear si el programa está en ejecución.

function ejecutarProgramaContinuo() {
    programaEnEjecucion = true;
    while (programaEnEjecucion && posicionInstruccionActual < instruccionesMemoria.length) {
        ejecutarInstruccion();
    }
}

function pausarPrograma() {
    programaEnEjecucion = false;
}
