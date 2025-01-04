/**
 * Función que crea la carta HTML
 * @param {String} carta Variable que recoge la carta para asignarle la imagen
 * @returns {HTMLImageElement} image de retorno
 */

export const crearCartaHtml = (carta) => {
  if (!carta) throw new Error("La variable carta es necesaria");
  // <img class="carta" src="assets/cartas/2C.png">
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");
 
  return imgCarta;
};
