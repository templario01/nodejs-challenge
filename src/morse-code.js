/**
 * Write a program that automatically converts english text to morse code and vice versa, consider only use upper case letters
 * when converting
 *
 * @param {string} message - String to be converted
 * @param {string} convertTo - (morse | english)
 *
 * @returns {string}  - String converted to english or morse code
 */

const morseCodes = {
  ' ': ' ',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '.-.-.-': '.',
  '--..--': ',',
  '..--..': '?',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '.--.-.': '@',
  '.-.-.': '+',
  '-....-': '-',
  '-..-.': '/',
};

function morseCode(message, convertTo) {
  const messageCopy = message.toUpperCase();
  let tempMorse = [];
  let newPhrase = '';

  if (convertTo === 'morse') {
    for (const letterEnglish of messageCopy) { //recorremos string del mensaje en ingles
      for (const keyLetter in morseCodes) {
        if (morseCodes[keyLetter] === letterEnglish) { // morseCodes['.--.'] = P si hay coincidencia entre la letra de morsecodes y la letra del mensaje
          newPhrase += keyLetter + ' '; //en la ultima iteracion anadira un espacio al final
        }
      }
    }
    newPhrase = newPhrase.slice(0,-1) // quitamos el ultimo espacio del nuevo string
  }
  if (convertTo === 'english') {
    tempMorse = messageCopy //almacenamos en un array: cambiamos los 3 espacios por 2, separamos cada letra morse, los espacios vacios lo cambiamos a un espacio
    .replace(/\s\s\s/g,'  ')
    .split(' ')
    .map(function (item) {
      return item === '' ? ' ' : item;
    });
    for (const morseLetter of tempMorse) {
      for (const keyLetter in morseCodes) {
        if (keyLetter === morseLetter) {
          newPhrase +=  morseCodes[keyLetter];
        }
      }
    }
  }
  return newPhrase;
}

module.exports = morseCode;
