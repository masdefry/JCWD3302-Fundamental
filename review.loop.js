// > LOOPING
// Perulangan

let greeting = 'Hi';
console.log(greeting);
console.log(greeting);
console.log(greeting);
console.log(greeting);
console.log(greeting);
console.log(greeting);
console.log(greeting);
console.log(greeting);
console.log(greeting);

// - Looping For
// 1. Start
// 2. Condition to Stop
// 3. Exit Way -> Merubah Start
for (let i = 1; i <= 10; i++) {
  console.log(greeting);
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

const fruits = [
  'Apple',
  'Mango',
  'Orange',
  'Durian',
  'Kiwi',
  'Melon',
  'Pepaya',
];
console.log(fruits[1]);

for (let i = 0; i <= fruits.length - 1; i++) {
  // 0 - .lenth 6
  console.log(fruits[i]);
}

// for of
for (let item of fruits) {
  console.log(item);
}
