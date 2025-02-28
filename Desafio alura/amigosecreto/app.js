// Lista para almacenar nombres
let amigos = [];
// Función para agregar amigos
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); // Corregir 'Value' por 'value'

    // Validación del campo cuando esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre');
        return;
    }

    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        alert(`Este nombre ${nombreAmigo} ya fue ingresado`);
        return;
    }

    // Agregar el nombre a la lista
    amigos.push(nombreAmigo);

    // Limpiar el campo
    inputAmigo.value = ""; // Corregir 'Value' por 'value'

    // Actualizar la lista HTML
    actualizarLista();
}
// Función para actualizar lista de la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpiar la lista
    listaAmigos.innerHTML = ""; // Borra el contenido dentro del contenedor

    // Recorrer la lista de amigos con for
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i]; // Mostrar el nombre del amigo
        listaAmigos.appendChild(li);
    }
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    // Validar que haya al menos un amigo
    if (amigos.length === 0) {
        alert('Por favor, agrega al menos un amigo');
        return;
    }

    // Índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el nombre sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El sorteo ha arrojado a: <strong>${amigoSorteado}</strong>`;
}





