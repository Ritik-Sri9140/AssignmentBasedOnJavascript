function filterWordsWithAE(str3) {
  const filteredWords = [];
  let word = "";

  for (let i = 0; i < str3.length; i++) {
    const char = str3[i];

    if (char !== " ") {
      word += char;
    } else {
      if (word !== "") {
        if (word.includes('a') || word.includes('e')) {
          filteredWords.push(word);
        }
        word = "";
      }
    }
  }

  if (word !== "") {
    if (word.includes('a') || word.includes('e')) {
      filteredWords.push(word);
    }
  }

  return filteredWords;
}

const str3 = "Hello world! This is a sample text.";
const filteredWords = filterWordsWithAE(str3);
console.log(filteredWords);

  