var pistas = [
    "Usa la linterna para debilitar a los enemigos.",
    "Los lugares con luz te ayudaran a recuperar tu vida.",
    "Esta historia no es un bucle, es una espiral."
];

var pistaActual = 0;

function cambiarPista() {
    pistaActual = pistaActual + 1;

    if (pistaActual >= pistas.length) {
        pistaActual = 0;
    }

    document.getElementById("texto-pista").innerHTML = pistas[pistaActual];
}