const chatForm = document.getElementById("chatForm");
const mensajeInput = document.getElementById("mensajeInput");
const chatBox = document.getElementById("chatBox");

// Se ejecuta cada vez que el usuario envía el formulario
chatForm.addEventListener("submit", function (evento) {
  evento.preventDefault(); // evita que la página se recargue

  const mensajeUsuario = mensajeInput.value.trim();
  if (mensajeUsuario === "") return;

  mostrarMensaje(mensajeUsuario, "usuario");

  const respuestaBot = generarRespuesta(mensajeUsuario);
  mostrarMensaje(respuestaBot, "bot");

  mensajeInput.value = "";
});

// Agrega un mensaje al chat en pantalla
function mostrarMensaje(texto, tipo) {
  const div = document.createElement("div");
  div.classList.add("mensaje", tipo);
  div.textContent = texto;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight; // baja el scroll al último mensaje
}

// Lógica del bot: reconoce palabras clave (if/else simple)
function generarRespuesta(mensaje) {
  const texto = mensaje.toLowerCase();

  if (texto.includes("hola")) {
    return "¡Hola! ¿En qué te puedo ayudar?";
  } else if (texto.includes("horario")) {
    return "Atendemos de 9 a 18hs, de lunes a viernes.";
  } else if (texto.includes("gracias")) {
    return "¡De nada! Cualquier cosa, avisame.";
  } else if (texto.includes("chau") || texto.includes("adios")) {
    return "¡Hasta luego!";
  } else {
    return "No entendí tu mensaje, ¿podés reformularlo?";
  }
}
