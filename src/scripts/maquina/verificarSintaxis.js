function verificarSintaxis(lineas) {
    // Iterar sobre cada línea y verificar la sintaxis
    for (let i = 0; i < lineas.length; i++) {
        const linea = lineas[i].trim();  // Eliminar espacios en blanco al inicio y fin de la línea

        // Verificar si es un comentario o línea en blanco
        if (linea.startsWith('//') || linea === '') {
            continue;  // Es un comentario o línea en blanco, continuar con la siguiente línea
        }

        // Verificar si es una instrucción válida
        if (!esInstruccionValida(linea)) {
            alert(`Error de sintaxis en la línea ${i + 1}: "${linea}"`);
            return false;  // Detener la carga del archivo
        }
    }

    return true;  // La sintaxis es válida para todas las líneas
}

function esInstruccionValida(linea) {
    // Expresiones regulares para verificar las operaciones CHMAQUINA
    const regexCargue = /^cargue\s+\w+$/i;
    const regexAlmacene = /^almacene\s+\w+$/i;
    const regexNueva = /^nueva\s+(\w+)\s+([CIRL])\s*(.*)?$/i;
    const regexLea = /^lea\s+\w+$/i;
    const regexSume = /^sume\s+\w+$/i;
    const regexReste = /^reste\s+\w+$/i;
    const regexMultiplique = /^multiplique\s+\w+$/i;
    const regexDivida = /^divida\s+\w+$/i;
    const regexPotencia = /^potencia\s+\w+$/i;
    const regexModulo = /^modulo\s+\w+$/i;
    const regexConcatene = /^concatene\s+\w+$/i;
    const regexElimine = /^elimine\s+\w+$/i;
    const regexExtraiga = /^extraiga\s+\w+$/i;
    const regexY = /^Y\s+(\w+)\s+(\w+)\s+(\w+)$/i;
    const regexO = /^O\s+(\w+)\s+(\w+)\s+(\w+)$/i;
    const regexNO = /^NO\s+(\w+)$/i;
    const regexMuestre = /^muestre\s+\w+$/i;
    const regexImprima = /^imprima\s+\w+$/i;
    const regexRetorne = /^retorne\s*(\d+)?$/i;
    const regexVaya = /^vaya\s+\w+$/i;
    const regexVayasi = /^vayasi\s+\w+\s+\w+$/i;
    const regexEtiqueta = /^etiqueta\s+\w+\s+\d+$/i;


    // Verificar si la línea coincide con alguna expresión regular
    const matchNueva = linea.match(regexNueva);

    if (matchNueva) {
        const nombreVariable = matchNueva[1];
        const tipoVariable = matchNueva[2];
        let valorInicializacion = matchNueva[3];

        // Asignar 0 por defecto si no se especifica el tercer operando
        valorInicializacion = valorInicializacion ? valorInicializacion.trim() : '0';

        // Validar el formato del valor de inicialización según el tipo de variable
        let valorEsValido = false;
        if (tipoVariable === 'C') {
            valorEsValido = true;
        } else if (tipoVariable === 'I') {
            valorEsValido = /^\d+$/.test(valorInicializacion);
        } else if (tipoVariable === 'R') {
            valorEsValido = /^\d+(\.\d+)?$/.test(valorInicializacion);
        } else if (tipoVariable === 'L') {
            valorEsValido = /^[01]$/.test(valorInicializacion);
        }

        if (!valorEsValido) {
            console.error(`Error de sintaxis en la línea: "${linea}". El valor de inicialización no es válido para el tipo de variable.`);
            return false;
        }
        return true;
    }

    // Verificar otras operaciones CHMAQUINA
    const esValida = (
        regexCargue.test(linea) ||
        regexAlmacene.test(linea) ||
        regexLea.test(linea) ||
        regexSume.test(linea) ||
        regexReste.test(linea) ||
        regexMultiplique.test(linea) ||
        regexDivida.test(linea) ||
        regexPotencia.test(linea) ||
        regexModulo.test(linea) ||
        regexConcatene.test(linea) ||
        regexElimine.test(linea) ||
        regexExtraiga.test(linea) ||
        regexY.test(linea) ||
        regexO.test(linea) ||
        regexNO.test(linea) ||
        regexMuestre.test(linea) ||
        regexImprima.test(linea) ||
        regexRetorne.test(linea) ||
        regexVaya.test(linea) ||
        regexVayasi.test(linea) ||
        regexEtiqueta.test(linea)
    );

    if (!esValida) {
        console.error(`Error de sintaxis en la línea: "${linea}"`);
    }

    return esValida;
}
