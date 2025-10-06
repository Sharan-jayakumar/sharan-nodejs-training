// node js input and output
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(query) {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
}

const inputString = await ask("Enter a string to compress: ").then((answer) =>
  answer.trim()
);

let compressedString = "";

for (let i = 0; i < inputString.length; i++) {
  let count = 1;
  while(inputString[i] === inputString[i+1] && i < inputString.length) {
    count++;
    i++;
  }
  compressedString += inputString[i] + count;
}

console.log("Compressed String:", compressedString);

const inputString1 = await ask("Enter a string to decompress: ").then(
  (answer) => answer.trim()
);

rl.close();

let decompressedString = "";

for (let i = 0; i < inputString1.length; i += 2) {
  let char = inputString1[i];
  let count = inputString1[i+1];
  decompressedString += char.repeat(count);
}

console.log("Decompressed String:", decompressedString);
