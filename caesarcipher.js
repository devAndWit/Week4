// decrypt Text = entschlüsselter Text
// encrypt text = verschlüsselter Text

console.clear();

class AW_Crypt {
  shift = 0;
  alphabetBase = 97;
  letterscount = 0;
  decryptLetters = "abcdefghijklmnopqrstuvwxyz";
  encryptLetters = "";
  decryptText = "";
  encryptText = "";
  alphabetTable = {};

  /**
   *
   * @param {int} shift letter shift as integer
   * @return void
   */
  constructor(shift = 0) {
    this.setLetterShift(shift);
  }

  /**
   *
   * @param {int} shift letter shift (positive or negative) integer
   * @return void
   */
  setLetterShift(shift = 0) {
    this.shift = shift % 26;
    this.setDecryptLetters();
    this.setLetterCount();
    this.createAlphabet();
    this.createAlphabetTable();
  }

  /**
   *
   * @return void
   */
  setLetterCount() {
    this.letterscount = this.decryptLetters.length;
  }

  /**
   *
   * @param {string} letters the base alphabet
   * @return void
   */
  setDecryptLetters(letters = "abcdefghijklmnopqrstuvwxyz") {
    this.decryptLetters = letters;
  }

  /**
   * @return void
   */
  createAlphabet() {
    this.encryptLetters = "";

    for (let i = 0; i < this.decryptLetters.length; i++) {
      let code = (i + this.shift) % 26;

      if (code < 0) {
        code = code + 26;
      }
      this.encryptLetters += String.fromCharCode(code + this.alphabetBase);
    }

    this.decryptLetters =
      this.decryptLetters + this.decryptLetters.toUpperCase();

    this.encryptLetters =
      this.encryptLetters + this.encryptLetters.toUpperCase();
  }

  /**
   * @return void
   */
  createAlphabetTable() {
    this.alphabetTable = {};

    for (let i = 0; i < this.decryptLetters.length; i++) {
      this.alphabetTable[this.decryptLetters[i]] = {
        decrypt: this.decryptLetters[i],
        encrypt: this.encryptLetters[i],
      };
    }
  }

  /**
   *
   * @param {string} decryptText string with decrypt text
   */
  createEncryptText(decryptText = "") {
    decryptText = decryptText.trim();

    let encryptText = "";

    for (let i = 0; i < decryptText.length; i++) {
      if (!this.alphabetTable[decryptText[i]]) {
        encryptText += decryptText[i];
      } else {
        encryptText += this.alphabetTable[decryptText[i]].encrypt;
      }
    }

    this.decryptText = decryptText;
    this.encryptText = encryptText;
  }

  /**
   *
   * @param {number} number The number determines the template for output
   * @returns string
   */
  getOutputText(number) {
    let output = "";

    switch (number) {
      case 1: // enter Message
        output = "++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n";
        output += "\n";
        output += "  Please enter the number of character shifts.\n";
        output += "\n";
        output += "++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n";
        output += "  > ";
        break;

      case 2: // enter shift
        output = "\n";
        output += "++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n";
        output += "\n";
        output += "  Enter your message\n";
        output += "\n";
        output += "++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n";
        output += "  > ";
        break;

      case 3:
        output =
          "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++";
        output += "\n\n";
        output += "  letter shift: " + this.shift;
        output += "\n";
        output += "  decrypt alphabet: " + this.decryptLetters;
        output += "\n";
        output += "  encrypt alphabet: " + this.encryptLetters;
        output += "\n\n";
        output +=
          "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++";
        output += "\n\n";
        output += "  decrypt message:";
        output += "\n";
        output += "    " + this.decryptText;
        output += "\n\n";
        output += "  encrypt message:";
        output += "\n";
        output += "    " + this.encryptText;
        output += "\n\n";
        output +=
          "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++";
        break;
    }

    return output;
  }
}

let obj = new AW_Crypt();

process.stdout.write(obj.getOutputText(1));

process.stdin.setEncoding("utf8");

let state = 1;
process.stdin.on("data", (input) => {
  input = input.toString().trim();

  if (state === 1) {
    parsedInput = parseInt(input);

    if (parsedInput) {
      console.clear();
      obj.setLetterShift(parsedInput);
      input = "";
      state = 2;
    } else {
      console.clear();
      process.stdout.write(obj.getOutputText(1));
    }
  }

  if (state === 2) {
    process.stdout.write(obj.getOutputText(2));

    if (input.length > 0) {
      obj.createEncryptText(input);
      state = 3;
    } else {
      console.clear();
      process.stdout.write(obj.getOutputText(2));
    }
  }

  if (state === 3) {
    console.clear();
    process.stdout.write(obj.getOutputText(3));
    process.exit(null);
  }
});
