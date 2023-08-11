const str2 = "This is a sample text  a and e";
let count = 0;
let word5 = "";
let foundAE = false;

for (let i = 0; i < str2.length; i++) {
  const char = str2[i];

  if (char !== " ") {
    word5 += char;
  } else {
    if (word5 !== "") {
      if (word5.includes("a") || word5.includes("e")) {
        count++;
        foundAE = true;
      }
      word = "";
    }
  }
}

if (word5 !== "") {
  if (word5.includes("a") || word5.includes("e")) {
    if (!foundAE) {
      count++;
    }
  }
}

console.log(count);

