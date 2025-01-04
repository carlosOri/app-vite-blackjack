import { pedirCarta, valorCarta, crearCartaHtml} from "./index"

/**
 * Función que agrupa toda la logica de datos de la computadora
 * @param {Number} puntosMinimos Serán los puntos que consiga el jugador
 * @param {HTMLElement}puntosHTML HTML para mostrar el resultado
 * @param {HTMLElement}divCartasComputadora HTML para mostrar el Html
 * @param {Array<String>}deck Array de las cartas
 */


// turno de la computadora
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if(!puntosMinimos) throw new Error ("El valor de puntos minimos es necesario");
    if(!deck) throw new Error("El deck es necesario");
    if(!puntosHTML) throw new Error("El argumento puntosHtml es necesario");

    let puntosComputadora = 0;
  
  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    const imgCarta = crearCartaHtml(carta);
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
