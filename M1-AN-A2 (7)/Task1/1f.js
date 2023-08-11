function createJSONArray(strw) {
  const jsonArray = [];
  let word9 = "";
  let startIndex = 0;

  for (let i = 0; i <= strw.length; i++) {
    const char = strw[i];

    if (char === " " || i === strw.length) {
      if (word9.length > 0) {
        jsonArray.push({
          myWord: word9,
          wordLength: word9.length,
          vowelCount: countVowels(word9)
        });
        word9 = "";
      }
      startIndex = i + 1;
    } else {
      word9 += char;
    }
  }

  return jsonArray;
}

function countVowels(word9) {
  const lowerWord = word9.toLowerCase();
  const vowelMatches = lowerWord.match(/[aeiou]/gi);
  return vowelMatches ? vowelMatches.length : 0;
}

const strw = "Hello world";
const resulta = createJSONArray(strw);
console.log(resulta);

  