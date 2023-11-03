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
