// 02 - FizzBuzz
function FizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

FizzBuzz(20);

// 04 - Remove All Odd Numbers
function RemoveOddNumbersInArray(arrNumbers) {
  let evenNumbers = [];

  for (let item of arrNumbers) {
    if (item % 2 === 0) evenNumbers.push(item);
  }

  return evenNumbers;
}

console.log(RemoveOddNumbersInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 05 - Split String to Array
function SplitStringToArray(string) {
  let tempItem = '';
  let arrString = [];

  for (let item of string) {
    tempItem += item;
    if (item === ' ') {
      arrString.push(tempItem);
      tempItem = '';
    }
  }
  if (tempItem) arrString.push(tempItem);
}

SplitStringToArray('Hello World');
