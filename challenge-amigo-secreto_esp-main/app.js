// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//!===EXTRA===
const placeholderError = document.getElementById("placeholderError");
const drawError = document.getElementById("drawError");

let amigos = []; //variable tipo array que almacena nombres

function agregarAmigo() {
    let input = document.querySelector(".input-name");//capturar valor de entrada 
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        //!===EXTRA===
        placeholderError.textContent = "Por favor, escriba el nombre de su amistad."
        return;
    } //validar la entrada amigos
    
    amigos.push(nombre);
    input.value = "";//limpia el input
    //!===EXTRA===
    placeholderError.textContent = ""; // Borra el error si se ingresó un nombre correctamente
    actualizarLista();
}//function agregar amigos

function actualizarLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    /**
     * lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
     */
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        //!===EXTRA===
        drawError.textContent = "No existen nombres para hacer el sorteo.";
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    document.querySelector("#resultado").innerHTML = `Tu amigo secreto es: <strong>${amigoSorteado}</strong>`;
    //!===EXTRA===
    drawError.textContent = ""; // Borra el error si hay nombres en la lista
}


