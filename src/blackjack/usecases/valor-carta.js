

/**
 * Función que da valor a las cartas
 * @param {String} carta quita la letra de las cartas 
 * @returns {Number} devuelve el valor de la carta
 */

  // Valor Carta();
 export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  };

  export default valorCarta;