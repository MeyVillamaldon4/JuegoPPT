let puntosUsuario = 0;
let puntosPc = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntoJugador");
let contenedorPuntosPc = document.querySelector("#puntoPc");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elegirArma = document.querySelector("#elegir-arma");
let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-pc");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
  boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {
  let eleccionPc = Math.floor(Math.random() * (3 - 1 + 1));
  let eleccionUsuario = e.currentTarget.id; //llama x el target del html

  //piedra = 0 / papel 1 / tijera 2

  if (eleccionPc === 0) {
    eleccionPc = "piedra";
  } else if (eleccionPc === 1) {
    eleccionPc = "papel";
  } else if (eleccionPc === 2) {
    eleccionPc = "tijera";
  }

  //piedra> tijera
  //tijera>papel
  //papel >piedra
  // si son iguales empate

  if (
    (eleccionUsuario === "piedra" && eleccionPc === "tijera") ||
    (eleccionUsuario === "tijera" && eleccionPc === "papel") ||
    (eleccionUsuario === "papel" && eleccionPc === "piedra")
  ) {
    ganaUsuario();
  } else if (
    (eleccionPc === "piedra" && eleccionUsuario === "tijera") ||
    (eleccionPc === "tijera" && eleccionUsuario === "papel") ||
    (eleccionPc === "papel" && eleccionUsuario === "piedra")
  ) {
    ganaPc();
  } else {
    empate();
  }

  mensaje.classList.remove("disabled");
  contenedorEleccionUsuario.innerHTML = eleccionUsuario;
  contenedorEleccionPC.innerHTML = eleccionPc;


  if (puntosUsuario === 5 || puntosPc === 5) {
    if (puntosUsuario === 5) {
      instrucciones.innerText = "Ganaste el juego 🔥";

    }
    if (puntosPc === 5) {
      instrucciones.innerText = "😭 La computadora ganó el juego";
    }
    elegirArma.classList.add("disabled");
    reiniciar.classList.remove("disabled");
    reiniciar.addEventListener("click", reiniciarJuego);
  }
}
function ganaUsuario() {
  puntosUsuario++;
  contenedorPuntosUsuario.innerText = puntosUsuario;
  contenedorGanaPunto.innerText = "¡Ganaste un punto!🔥";
}
function ganaPc() {
  puntosPc++;
  contenedorPuntosPc.innerText = puntosPc;
  contenedorGanaPunto.innerText = "¡La pc gano un punto!😭";
}
function empate() {
  contenedorGanaPunto.innerText = "¡Empate!";
}
function reiniciarJuego() {
    
  reiniciar.classList.add("disabled");
  elegirArma.classList.remove("disabled");
  mensaje.classList.add("disabled");

  puntosUsuario = 0;
  puntosPc = 0;

  contenedorPuntosUsuario.innerText = puntosUsuario;
  contenedorPuntosPc.innerText = puntosPc;
  instrucciones.innerText = "El primero en llegar a 5 puntos gana."
}
