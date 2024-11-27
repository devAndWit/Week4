// English to Pig Latin Translator

//     Description: Create a program that translates English text to Pig Latin.
//     Requirements:
//         The program should take an English phrase as an input from process.argv.
//         Convert each word to Pig Latin:
//             If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add “ay.”
//                 Example: Happy = appyh + ay = appyhay
//             If a word starts with two consonants move the two consonants to the end of the word and add “ay.”
//                 Example: Child = Ildch + ay = Ildchay
//             If a word starts with a vowel add the word “way” at the end of the word.
//                 Example: Awesome = Awesome +way = Awesomeway
//         Output the translated phrase to the console.
//     Example:
//         node pigLatin.js "Pig Latin is hard to speak"
//         # Output: Igpay Atinlay isway ardhay otay eakspay
//
//
// vowel = a, e, i, o, u
//
// rule 1 - begin consonant + vowel => consonant to word end + ay
// Example: Happy = appyh + ay = appyhay
//
// rule 2 - two consonant => two consonant to word end + ay
// Example: Child = Ildch + ay = Ildchay
//
// rule 3 - start with vowel => word + way
// Example: Awesome = Awesome +way = Awesomeway
//--------------------------------------------------------------------------------------------------------------------------------------

class PigLatin {
  normalText = "";
  pigText = "";
  arrWords = [];

  constructor() {}

  clearAllValues() {
    this.normalText = "";
    this.pigText = "";
    this.arrWords = [];
  }

  setText(text) {
    this.normalText = text.trim();
    this.setArrWords(this.normalText);
    this.translate();
  }

  setArrWords(text) {
    this.arrWords = this.normalText.split(" ");
  }

  translate() {
    this.arrWords.forEach((word) => {
        
    });
  }

  getTemp() {
    console.log(this.normalText);
    console.log(this.arrWords.join(" "));
  }

  getOutputText(type) {
    let output = "";

    switch (type) {
      case 1:
        output = "\n";
        output +=
          "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++";
        output += "\n";
        output += "   Please type your message";
        output += "\n";
        output +=
          "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++";
        output += "\n";
        output += "   >  ";
        break;

      case 2:
        output = "\n";
        output +=
          "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++";
        output += "\n";
        output += "   Your message:" + this.normalText;
        output += "\n";
        output += "   Pig Latin:" + this.pigText;
        output += "\n";
        output +=
          "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++";
        output += "\n";
        break;
    }

    return output;
  }
}

let obj = new PigLatin();

obj.setText("Pig Latin is hard to speak");
obj.getTemp();

// process.stdout.write(obj.getOutputText(1));

// process.stdin.setEncoding("utf8");

// let state = 1;

// process.stdin.on("data", (input) => {
//   input = input.toString().trim();

//   if (state === 1) {
//     if (input.length > 0) {
//       obj.setText(input);
//       state = 2;
//     } else {
//       console.clear();
//       process.stdout.write(obj.getOutputText(1));
//     }
//   }

//   if (state === 2) {
//     console.clear();
//     process.stdout.write(obj.getOutputText(2));
//     process.exit(null);
//   }
// });
