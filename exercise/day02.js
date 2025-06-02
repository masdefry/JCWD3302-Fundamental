// 01 - Even or Odd Number
const inputNumber = 10;

if (inputNumber % 2 === 0) {
  console.log(`${inputNumber} is Even Number`);
} else {
  console.log(`${inputNumber} is Odd Number`);
}

// 02 - Number is Prime or Not
// Bilangan yang habis dibagi 1 dan dirinya sendiri
{
  const inputNumber = 3;
  let isPrime = 'Prime';

  for (let i = 2; i < inputNumber; i++) {
    if (inputNumber % i === 0) {
      isPrime = 'Not Prime';
      break;
    }
  }
  console.log(isPrime);
}

// 03 - Sum Numbers 1 to N
{
  const n = 10;
  let total = 0; // 0 += 1 = 1; 1 += 2 = 3; 3 += 3 = 6; 6 += 4 = 10; 10 += 5 = 15;

  for (let i = 1; i <= n; i++) {
    // 6 <= 5? FALSE!
    total += i;
  }
  console.log(total);
}

// 04 - Factorial a Number
{
  const number = 4;
  let total = 1; // 1 *= 4 = 4; 4 *= 3 = 12; 12 *= 2 = 24; 24 *= 1 = 24;
  for (let i = number; i > 0; i--) {
    // i=0; 0>0? FALSE;
    total *= i;
  }

  console.log(total);
}

// 05 - Fibonacci
{
  let firstFibo = 0;
  let secondFibo = 1;
  let nLooping = 15;
  let currentFibo = 0;

  for (let i = 2; i <= nLooping; i++) {
    currentFibo = firstFibo + secondFibo;
    firstFibo = secondFibo;
    secondFibo = currentFibo;
  }
  console.log('>>>');
  console.log(currentFibo);
}
