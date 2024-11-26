// decrypt Text = entschlüsselter Text
// encrypt text = verschlüsselter Text

let klartext = "abc";
let codetext = "";
let versatz = -5;

let lowerCaseLetter = "abcdefghiklmnopqrstuvwxyz";
let upperCaseLetter = lowerCaseLetter.toUpperCase();
let base = lowerCaseLetter.charCodeAt(0);

for (let i = 0; i < lowerCaseLetter.length; i++) {
  let clear = lowerCaseLetter.charCodeAt(i);
  let code = (clear % base) + versatz;

  console.log(code);
}

console.log("Kleinbuchstaben : ", lowerCaseLetter);
console.log("Großbuchstaben : ", upperCaseLetter);
console.log("Base : ", base);
console.log("Versatz : ", versatz);

// codieren(klartext);
