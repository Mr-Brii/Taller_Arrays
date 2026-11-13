let ListaNombres = [];

function agregarNombre() {
    let nombre = document.getElementById("nombre").value.trim().toUpperCase();

    if (nombre === "") {
        alert("Por favor ingrese el nombre.");
        document.getElementById("nombre").style.backgroundColor = "red";
        return;
    } 
    else if (ListaNombres.includes(nombre)) {
        alert(`El nombre ${nombre} ya está registrado`);
        document.getElementById("nombre").style.backgroundColor = "white";
        return;x
    }
    else {
        document.getElementById("nombre").style.backgroundColor = "white";
        ListaNombres.push(nombre);
        alert(`Se guardo el nombre: ${nombre}`);
        document.getElementById("nombre").value = "";
    }
    
    MostrarNombres();
}

function MostrarNombres() {
    let lista = document.getElementById("lista");
    let cantidad = document.getElementById("cantidad");

    lista.innerHTML = "";
    for (let i = 0; i < ListaNombres.length; i++) {
        lista.innerHTML += `<li>${ListaNombres[i]}</li>`;
    }

    cantidad.textContent = `Total nombres: ${ListaNombres.length}`;
}
