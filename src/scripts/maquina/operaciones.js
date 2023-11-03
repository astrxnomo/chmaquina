import { acumulador } from './programaPrincipal.js';
import { variables } from './programaPrincipal.js';

export function cargue(acumulador, valor) {
    acumulador = parseFloat(valor);
}

// Almacene [variable]
export function almacene(variable) {
    if (variables.hasOwnProperty(variable)) {
        variables[variable] = acumulador;
    } else {
        console.error(`Error: La variable '${variable}' no existe.`);
    }
}

// Nueva [variable] [tipo] [valorInicial]
export function nueva(nombre, tipo, valorInicial) {
    if (valorInicial === undefined) {
        if (tipo === 'C') {
            valorInicial = '';
        } else if (tipo === 'I' || tipo === 'R') {
            valorInicial = 0;
        } else if (tipo === 'L') {
            valorInicial = false;
        }
    }
    variables[nombre] = valorInicial;
}

// Lea [variable]
export function lea(variable) {
    // Implementa la lógica para leer valores desde una fuente externa (como el teclado).
    // Luego, almacena el valor leído en la variable.
    // Ejemplo simplificado:
    const valorLeido = prompt('Ingrese un valor:');
    if (variables.hasOwnProperty(variable)) {
        variables[variable] = parseFloat(valorLeido);
    } else {
        console.error(`Error: La variable '${variable}' no existe.`);
    }
}

// Sume [valor]
export function sume(acumulador, valor) {
    acumulador += parseFloat(valor);
}

// Reste [valor]
export function reste(acumulador, valor) {
    acumulador -= parseFloat(valor);
}

// Multiplique [valor]
export function multiplique(acumulador, valor) {
    acumulador *= parseFloat(valor);
}

// Divida [valor]
export function divida(acumulador, valor) {
    const divisor = parseFloat(valor);
    if (divisor !== 0) {
        acumulador /= divisor;
    } else {
        console.error('Error: División por cero.');
    }
}

// Potencia [valor]
export function potencia(acumulador, valor) {
    acumulador = Math.pow(acumulador, parseFloat(valor));
}

// Módulo [valor]
export function modulo(acumulador, valor) {
    const divisor = parseFloat(valor);
    if (divisor !== 0) {
        acumulador %= divisor;
    } else {
        console.error('Error: Módulo por cero.');
    }
}

// Concatene [cadena]
export function concatene(acumulador, cadena) {
    if (typeof acumulador === 'string') {
        acumulador += cadena;
    } else {
        console.error('Error: El acumulador no es de tipo cadena.');
    }
}

// Elimine [variable] [posición]
export function elimine(variable, posicion) {
    if (variables.hasOwnProperty(variable) && typeof variables[variable] === 'string' && posicion >= 0 && posicion < variables[variable].length) {
        variables[variable] = variables[variable].substring(0, posicion) + variables[variable].substring(posicion + 1);
    } else {
        console.error('Error: La variable no es de tipo cadena o la posición es inválida.');
    }
}

// Extraiga [variable] [posición] [cantidad]
export function extraiga(variable, posicion, cantidad) {
    if (variables.hasOwnProperty(variable) && typeof variables[variable] === 'string' && posicion >= 0 && cantidad > 0) {
        variables[variable] = variables[variable].substring(posicion, posicion + cantidad);
    } else {
        console.error('Error: La variable no es de tipo cadena o los parámetros son inválidos.');
    }
}

// Operación Y [variable1] [variable2] [variableResultado]
export function y(variable1, variable2, variableResultado) {
    if (variables.hasOwnProperty(variable1) && variables.hasOwnProperty(variable2) && typeof variables[variable1] === 'boolean' && typeof variables[variable2] === 'boolean') {
        variables[variableResultado] = variables[variable1] && variables[variable2];
    } else {
        console.error('Error: Las variables no son de tipo lógico o no existen.');
    }
}

// Operación O [variable1] [variable2] [variableResultado]
export function o(variable1, variable2, variableResultado) {
    if (variables.hasOwnProperty(variable1) && variables.hasOwnProperty(variable2) && typeof variables[variable1] === 'boolean' && typeof variables[variable2] === 'boolean') {
        variables[variableResultado] = variables[variable1] || variables[variable2];
    } else {
        console.error('Error: Las variables no son de tipo lógico o no existen.');
    }
}

// Operación NO [variable] [variableResultado]
export function no(variable, variableResultado) {
    if (variables.hasOwnProperty(variable) && typeof variables[variable] === 'boolean') {
        variables[variableResultado] = !variables[variable];
    } else {
        console.error('Error: La variable no es de tipo lógico o no existe.');
    }
}

// Operación Muestre [valor]
export function muestre(valor) {
    // Implementa la lógica para mostrar un valor en la interfaz de usuario o en la consola.
    // Ejemplo simplificado:
    console.log(valor);
}

// Operación Imprima [cadena]
export function imprima(cadena) {
    // Implementa la lógica para imprimir una cadena en la interfaz de usuario o en la consola.
    // Ejemplo simplificado:
    console.log(cadena);
}

// Operación Vaya [etiqueta]
export function vaya(etiqueta) {
    // Implementa la lógica para saltar a una etiqueta específica en el programa.
    // Ejemplo simplificado:
    // Aquí deberías buscar la etiqueta en tu programa y saltar a esa posición.
}

// Operación Vayasi [variable] [etiqueta]
export function vayasi(variable, etiqueta) {
    if (variables.hasOwnProperty(variable) && typeof variables[variable] === 'boolean') {
        if (variables[variable]) {
            // Implementa la lógica para saltar a una etiqueta específica si la variable es verdadera.
            // Ejemplo simplificado:
            // Aquí deberías buscar la etiqueta en tu programa y saltar a esa posición.
        }
    } else {
        console.error('Error: La variable no es de tipo lógico o no existe.');
    }
}

// Operación Etiqueta [nombre] [posición]
export function etiqueta(nombre, posicion) {
    // Las etiquetas no requieren implementación lógica, son marcadores en el programa.
    // Aquí, podrías registrar la posición de la etiqueta en tu programa para saltar a ella posteriormente.
}

// Operación Retorne [valor]
export function retorne(valor) {
    // Implementa la lógica para retornar un valor desde una función.
    // Ejemplo simplificado:
    return parseFloat(valor);
}
