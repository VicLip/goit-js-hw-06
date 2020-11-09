// Задача 2 - 3
// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""),
// которая принимает параметром
// произвольную строку(в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.

function findLongestWord(string = "") {
  // Write code under this line
  let word = string.split(" ");
  let londestWord = word[0];
  for (let i = 0; i < word.length; i += 1) {
    if (word[i].length > londestWord.length) {
      londestWord = word[i];
    }
  }
  return londestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
