let amigos = []; 

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);

    // Agregar el nombre a la lista 
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);

    // Limpiar el input
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debes añadir al menos un nombre antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${nombreSorteado}</strong> 🎉</li>`;
}

