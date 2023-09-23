
//Abrir archivo
document.getElementById('archivoBtn').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

//Ocultar/Mostrar Memoria
document.getElementById('mostrarMemoriaBtn').addEventListener('click', function() {
    var memoriaContainer = document.getElementById('memoriaContainer');

    // Comprueba si el contenedor "Memoria" está actualmente visible
    if (memoriaContainer.style.display === 'none') {
        // Si no está visible, hazlo visible
        memoriaContainer.style.display = 'block';
    } else {
        // Si está visible, hazlo invisible
        memoriaContainer.style.display = 'none';
    }
});

//Salir
document.getElementById('salirBtn').addEventListener('click', function() {
    window.close();
});
