// > LOOPING ARRAY
const alphabets = ['a', 'b', 'c', 'd', 'e', 'd', 'f'];

for (let i = 0; i < alphabets.length; i++) {
  console.log(alphabets[i]); // alphabets[5]
}

// > FOR OF
for (let item of alphabets) {
  console.log(item);
}
