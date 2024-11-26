// decrypt Text = entschlüsselter Text
// encrypt text = verschlüsselter Text

class AW_Crypt {
  shift = 0;
  alphabetBase = 97;
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
    this.createAlphabet();
    this.createAlphabetTable();
  }

  /**
   *
   * @param {int} shift letter shift as (positive or negative) integer
   * @return void
   */
  setLetterShift(shift) {
    this.shift = shift % 26;
  }

  setEncryptText(decryptText) {
    this.encryptText = decryptText.trim();
  }

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

  createAlphabetTable() {
    this.alphabetTable = {};
    for (let i = 0; i < this.decryptLetters.length; i++) {
      this.alphabetTable[this.decryptLetters[i]] = {
        decrypt: this.decryptLetters[i],
        encrypt: this.encryptLetters[i],
      };
    }
    console.log(this.alphabetTable);
  }

  createEncryptText(decryptText) {
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

  getInfo() {
    let output = "";
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
    if (this.encryptText.length > 0) {
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
    }

    console.log(output);
  }
}

let obj = new AW_Crypt(2);
obj.createEncryptText("Dies ist ein Test");
obj.getInfo();
