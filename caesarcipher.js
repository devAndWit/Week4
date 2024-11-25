const readline = require("readline");

// Erstelle eine Schnittstelle für die Eingabe/Ausgabe
const gameInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

gameInterface.question(getTaskText(), (answer) => {
  answer = answer.trim();

  loop(); // restart the loop
});

// start the loop
loop();
