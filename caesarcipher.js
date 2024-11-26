// decrypt Text = entschlüsselter Text
// encrypt text = verschlüsselter Text

class aw_crypt {
  shift = 0;
  decryptLetters = "abcdefghiklmnopqrstuvwxyz";
  encryptLetters = "";
  decryptText = "";
  encryptText = "";

  constructor(shift) {
    this.setLetterShift(shift);
    this.createAlphabet();
  }

  setLetterShift(number) {
    this.shift = number % 26;
  }

  setKlartext(text) {
    klartext = text.trim();
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
    console.log("letter shift: " + this.shift);
    console.log("decrypt alphabet: " + this.decryptLetters);
    console.log("encrypt alphabet: " + this.encryptLetters);
  }
}

let obj = new aw_crypt(2);

obj.getInfo();
