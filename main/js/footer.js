//Muestra el nombre del archivo y el número de instrucciones
document.getElementById('fileInput').addEventListener('change', function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var contents = e.target.result;
        var lines = contents.split('\n');
        var tableBody = document.getElementById('fileTable').getElementsByTagName('tbody')[0];

        // Limpiar la tabla antes de agregar nuevas líneas
        tableBody.innerHTML = '';

        // Agregar cada línea a la tabla
        for (var i = 0; i < lines.length; i++) {
            var newRow = tableBody.insertRow();
            var idCell = newRow.insertCell(0);
            var contentCell = newRow.insertCell(1);

            // Asegúrate de que el ID siempre tenga 4 dígitos
            var id = String(i + 1).padStart(4, '0');

            idCell.textContent = id;
            contentCell.textContent = lines[i];
        }

        // Actualiza el footer con la información del archivo
        document.getElementById('fileInfo').textContent = 'Programa: ' + file.name + ' | Instrucciones: ' + lines.length;
    };

    reader.readAsText(file);
});

// Actualiza la fecha y hora cada segundo
setInterval(function() {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth() + 1; // Los meses empiezan en 0
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Asegúrate de que los números siempre tengan dos dígitos
    day = String(day).padStart(2, '0');
    month = String(month).padStart(2, '0');
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    // Formatea la fecha y hora
    var dateTimeString = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;

    // Actualiza el footer con la fecha y hora actual
    document.getElementById('currentDateTime').textContent = dateTimeString;
}, 1000);
