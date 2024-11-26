// decrypt Text = entschlüsselter Text
// encrypt text = verschlüsselter Text

class aw_crypt {
  shift = 0;
  decryptLetters = "abcdefghiklmnopqrstuvwxyz";
  encryptLetters = "";
  decryptText = "TEST_1";
  encryptText = "TEST_2";

  constructor(shift) {
    this.setLetterShift(shift);
    this.createAlphabet();
  }

  setLetterShift(shift) {
    this.shift = shift % 26;
  }

  setKlartext(decryptText) {
    this.encryptText = decryptText.trim();
  }

  createAlphabet() {
    for (let i = 0; i < this.decryptLetters.length; i++) {
      let code = (i + this.shift) % 25;

      if (code < 0) {
        code = code + 25;
      }
      this.encryptLetters += String.fromCharCode(code + 97);
    }

    this.decryptLetters =
      this.decryptLetters + this.decryptLetters.toUpperCase();

    this.encryptLetters =
      this.encryptLetters + this.encryptLetters.toUpperCase();
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

let obj = new aw_crypt(2);

obj.getInfo();
