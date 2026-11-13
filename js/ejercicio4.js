
// Arreglo para guardar las citas
let citas = [];


// Función para registrar una cita
function registrarCita() {

    // Obtener los datos del formulario
    let fecha = document.getElementById("fecha").value;
    let nombre = document.getElementById("nombre").value;
    let tipo = document.getElementById("tipo").value;
    let raza = document.getElementById("raza").value;
    let edad = document.getElementById("edad").value;
    let consulta = document.getElementById("consulta").value;


    // Validar que todos los campos estén completos
    if (fecha == "" || nombre.trim() == "" || tipo == "" ||
        raza.trim() == "" || edad == "" || consulta == "") {

        alert("Por favor, complete todos los campos.");
        return;
    }


    // Validar que la fecha no sea anterior a la actual
    let fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);

    let fechaCita = new Date(fecha + "T00:00:00");

    if (fechaCita < fechaActual || isNaN(fechaCita.getTime())) {

        alert("La fecha de la cita no puede ser anterior a la fecha actual.");
        return;
    }


    // Validar el tipo de mascota
    if (tipo != "Perro" && tipo != "Gato" && tipo != "Conejo") {

        alert("Seleccione un tipo de mascota válido.");
        return;
    }


    // Validar el tipo de consulta
    if (consulta != "Cita" && consulta != "Baño y estética" &&
        consulta != "Vacunación" && consulta != "Urgencia") {

        alert("Seleccione un tipo de consulta válido.");
        return;
    }


    // Convertir la edad a número
    edad = parseInt(edad);

    // Validar la edad
    if (isNaN(edad) || edad < 0) {

        alert("Ingrese una edad válida.");
        return;
    }


    // Crear un objeto con los datos de la mascota
    let nuevaCita = {
        fecha: fecha,
        nombre: nombre,
        tipo: tipo,
        raza: raza,
        edad: edad,
        consulta: consulta
    };


    // Agregar la cita al arreglo
    citas.push(nuevaCita);


    // Mostrar las citas registradas
    mostrarCitas();


    // Mostrar mensaje de confirmación
    alert("Cita registrada correctamente.");


    // Limpiar los campos del formulario
    document.getElementById("formularioCita").reset();

}



// Función para mostrar las citas en la tabla
function mostrarCitas() {

    // Limpiar el contenido de la tabla
    document.getElementById("listaCitas").innerHTML = "";


    // Recorrer el arreglo de citas
    citas.forEach(function(cita) {

        // Crear una nueva fila
        let fila = document.createElement("tr");


        // Crear las celdas con la información
        let celdaFecha = document.createElement("td");
        celdaFecha.textContent = cita.fecha;

        let celdaNombre = document.createElement("td");
        celdaNombre.textContent = cita.nombre;

        let celdaTipo = document.createElement("td");
        celdaTipo.textContent = cita.tipo;

        let celdaRaza = document.createElement("td");
        celdaRaza.textContent = cita.raza;

        let celdaEdad = document.createElement("td");
        celdaEdad.textContent = cita.edad;

        let celdaConsulta = document.createElement("td");
        celdaConsulta.textContent = cita.consulta;


        // Agregar las celdas a la fila
        fila.appendChild(celdaFecha);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaTipo);
        fila.appendChild(celdaRaza);
        fila.appendChild(celdaEdad);
        fila.appendChild(celdaConsulta);


        // Agregar la fila a la tabla
        document.getElementById("listaCitas").appendChild(fila);

    });

}