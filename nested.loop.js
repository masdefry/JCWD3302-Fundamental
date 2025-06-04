for (let i = 1; i <= 3; i++) {
  console.log(`Loop i=${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(`Loop j=${j}`);
  }
}

let patternOutput = '';
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= i; j++) {
    patternOutput += '*';
  }
  patternOutput += '\n';
}
console.log(patternOutput);

function PrintPattern(s) {
  let patternOutput = '';

  for (let i = 1; i <= s; i++) {
    for (let j = 1; j <= s; j++) {
      patternOutput += '*';
    }
    patternOutput += '\n';
  }

  return patternOutput;
}

console.log(PrintPattern(5));
