const txt = "Hello world! This is a test.";
const result = [];

let word3 = "";
Array.from(txt).map(char => {
  if (char !== " ") {
    word3 += char;
  } else {
    if (word3 !== "") {
      result.push(word3.toUpperCase());
      word3 = "";
    }
  }
});

if (word3 !== "") {
  result.push(word3.toUpperCase());
}

console.log(result);
