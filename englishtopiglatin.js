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
