//Muestra en pantalla el archivo seleccionado y el número de instrucciones
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
    };

    reader.readAsText(file);
});
