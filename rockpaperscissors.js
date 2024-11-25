//Task
// Rock Paper Scissors

//     Description: Implement a basic Rock Paper Scissors game.
//     Requirements:
//         The program should take the player’s move as an input from process.argv.
//         The program should randomly generate a move for the computer.
//         Determine the winner based on the rules of Rock Paper Scissors.
//         Output the result (win, lose, or draw) to the console.
//     Example:
//         node rockPaperScissors.js rock
//         # Output: You chose rock. Computer chose scissors. You win!

const readline = require("readline");

// Erstelle eine Schnittstelle für die Eingabe/Ausgabe
const gameInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getTaskText() {
  let taskText =
    "\nPlease enter:\n  '1' - for Rock\n  '2' - for Paper\n  '3' - for Scissor\nOR\n  'q' - for quit. \n\n Enter here your choice: ";
  return taskText;
}

function getOutputText(state, choices) {
  // console.log("\x1b[41m RED \x1b[0m")
  // console.log("\x1b[42m GREEN \x1b[0m")
  // console.log("\x1b[43m YELLOW \x1b[0m")

  let output = "";

  if (state == -1) {
    output += "\n";
    output += "+++++++++++++++++++++++++++++++++++++++++++";
    output += "\n";
    output += " \x1b[41m Error: \x1b[0m";
    output += "\n";
    output += " Your input was not valid.";
    output += "\n";
    output += " Please try again.";
    output += "\n";
    output += "+++++++++++++++++++++++++++++++++++++++++++";
    return output;
  }

  // 0 = state exit
  if (state == 0) {
    output += "\n";
    output += "+++++++++++++++++++++++++++++++++++++++++++";
    output += "\n";
    output += "+     _                                   +\n";
    output += "+    | |                                  +\n";
    output += "+    | |__  _   _  ___                    +\n";
    output += "+    | '_ \\| | | |/ _ \\                   +\n";
    output += "+    | |_) | |_| |  __/                   +\n";
    output += "+    |_.__ /\\__, |\\___|                   +\n";
    output += "+            __/ |                        +\n";
    output += "+           |___/                         +\n";
    output += "+                                         +\n";
    output += "+ Good Bye.                               +";
    output += "\n";
    output += "+ Come back for a new game. ;-)           +";
    output += "\n";
    output += "+++++++++++++++++++++++++++++++++++++++++++";
    return output;
  }

  output = "\n";
  output += "+++++++++++++++++++++++++++++++++++++++++++";
  output += "\n";
  output += ` You selected => ${choices.player.value} - ${choices.player.text}`;
  output += "\n";
  output += ` Computer selected => ${choices.computer.value} - ${choices.computer.text}`;
  output += "\n";

  // 1 = state draw
  if (state == 1) {
    output += " \x1b[44m You chose the same as the computer. \x1b[0m";
    output += "\n";
    output += "+++++++++++++++++++++++++++++++++++++++++++";
    return output;
  }

  // 2 = state lose
  if (state == 2) {
    output += " \x1b[43m You lose the game. \x1b[0m";
    output += "\n";
    output += "+++++++++++++++++++++++++++++++++++++++++++";
    return output;
  }

  // 3 = state win
  if (state == 3) {
    output += " \x1b[42m You win the game. \x1b[0m";
    output += "\n";
    output += "+++++++++++++++++++++++++++++++++++++++++++";
    return output;
  }
}

function valueToText(val) {
  const values = {
    1: "rock",
    2: "paper",
    3: "scissor",
  };
  return values[val];
}

function generateComputerChoice() {
  let randomNumber = 0;
  randomNumber = Math.floor(Math.random() * 3 + 1);
  return randomNumber;
}

const isValidateAnswer = (answer) => {
  const validAnswer = ["1", "2", "3", "q"];
  return validAnswer.includes(answer);
};

const getResultPlayerVSComputer = (players) => {
  // draw
  if (players.player.value === players.computer.value) {
    return 1;
  }

  // win
  if (players.player.value === 1 && players.computer.value === 3) {
    return 3;
  }

  if (players.player.value === 2 && players.computer.value === 1) {
    return 3;
  }

  if (players.player.value === 3 && players.computer.value === 2) {
    return 3;
  }

  // lose
  return 2;
};

function loop() {
  // isValid = false;
  players = {
    player: {},
    computer: {},
  };

  gameInterface.question(getTaskText(), (answer) => {
    console.clear();

    answer = answer.trim();

    if (isValidateAnswer(answer) === false) {
      // Error Output
      console.log(getOutputText(-1));
    } else {
      if (answer.toLowerCase() === "q") {
        // Quit Output
        console.log(getOutputText(0));
        gameInterface.close(); // Beendet den readline-Prozess
        return;
      }

      if (answer.toLowerCase() === "1") {
        players.player.value = 1;
      }

      if (answer.toLowerCase() === "2") {
        players.player.value = 2;
      }

      if (answer.toLowerCase() === "3") {
        players.player.value = 3;
      }

      players.player.text = valueToText(players.player.value);
      players.computer.value = generateComputerChoice();
      players.computer.text = valueToText(players.computer.value);

      let result = getResultPlayerVSComputer(players);
      console.log(getOutputText(result, players));
    }

    loop(); // restart the loop
  });
}

// start the loop
loop();
