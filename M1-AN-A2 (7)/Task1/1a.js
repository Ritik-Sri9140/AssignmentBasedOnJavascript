const txt1 = "i enjoy coding and writing code is a lot of fun";
const wordArray = [];

let word = "";
Array.from(txt1).map(char => {
  if (char !== " ") {
    word += char;
  } else {
    if (word !== "") {
      wordArray.push(word);
      word = "";
    }
  }
});

if (word !== "") {
  wordArray.push(word);
}

console.log(wordArray);

