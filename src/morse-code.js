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
    for (const letterEnglish of messageCopy) { 
      for (const keyLetter in morseCodes) {
        if (morseCodes[keyLetter] === letterEnglish) { 
          newPhrase += keyLetter + ' '; 
        }
      }
    }
    newPhrase = newPhrase.slice(0,-1) 
  }

  if (convertTo === 'english') {
    tempMorse = messageCopy 
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
