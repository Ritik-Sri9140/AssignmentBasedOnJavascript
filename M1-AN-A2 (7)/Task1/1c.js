const str = "Hello World Example";
const re = [];
let word4 = "";

for (let i = 0; i < str.length; i++) {
  const char = str[i];

  if (char !== " ") {
    word4 += char;
  } else {
    if (word4 !== "") {
      re.push(word4[0]);
      word4 = "";
    }
  }
}

if (word4 !== "") {
  re.push(word4[0]);
}

const result3 = re.join("");

console.log(result3);
