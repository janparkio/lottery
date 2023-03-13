/**
  * Configuración de premios
  * tipo: identificador único, 0 es el marcador de posición para el premio especial predeterminado, no se pueden usar otros premios
  * cuenta: número de premios
  * título: descripción del premio
  * texto: título del premio
  * img: dirección de la imagen
  */
const prizes = [
  {
    type: 1,
    count: 1,
    text: "Premio Especial",
    title: "Premio Secreto",
    img: "../img/5-asus.png"
  },
  {
    type: 2,
    count: 1,
    text: "Premio Especial: ",
    title: "Notebook ASUS 15.6\'",
    img: "../img/5-asus.png"
  },
  {
    type: 3,
    count: 5,
    text: "Premio 1: ",
    title: "Entradas para el Asuncionico",
    img: "../img/1-asuncio.png"
  },
  {
    type: 4,
    count: 1,
    text: "Premio 2: ",
    title: "Mochila Pulsak",
    img: "../img/4-pulsak.png"
  },
  {
    type: 5,
    count: 4,
    text: "Premio 3: ",
    title: "Riñoneras Pulsak",
    img: "../img/3-pulsak.png"
  },
  {
    type: 6,
    count: 5,
    text: "Premio 4: ",
    title: "Termos Stanley",
    img: "../img/2-stanley.png"
  }
];

/**
 * The number of prizes drawn at one time corresponds to prizes
 */
const EACH_COUNT = [1, 1, 5, 6, 7, 8, 9, 10];

/**
 * Card company name logo
 */
const COMPANY = "UA";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
