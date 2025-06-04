// 01 - Display Multiplication Number
function DisplayMultiplication(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i}`);
  }
}

DisplayMultiplication(9);

// 02 - Palindrome
function Palindrome(text) {
  let textReversed = '';

  for (let i = text.length - 1; i >= 0; i--) {
    textReversed += text[i];
  }

  if (text === textReversed) {
    return `${text} is Palindrome`;
  } else {
    return `${text} is Not Palindrome`;
  }
}

Palindrome('madam');

// 04 - IDR Format (.toLocaleString('id-ID'))

// 05 - Remove Search Character

function RemoveSearchCharacter(string, searchString) {
  return string.replaceAll(searchString, '');
}

console.log(RemoveSearchCharacter('Hello, Hello', 'ell'));

// 06 - Swap Case
function SwapCase(text) {
  let outputSwapCase = '';

  for (let item of text) {
    if (item === item.toUpperCase()) {
      outputSwapCase += item.toLowerCase();
    } else {
      outputSwapCase += item.toUpperCase();
    }
  }

  return outputSwapCase;
}

console.log(SwapCase('AbCdEfG'));

// 09 - Sort Three Numbers
function SortThreeNumbers(num1, num2, num3) {
  let lowest = num1;
  let middle = num1;
  let highest = num1;

  //   Find Lowest
  if (num2 < lowest) {
    lowest = num2;
  }

  if (num3 < lowest) {
    lowest = num3;
  }

  //   Find Highest
  if (num2 > highest) {
    highest = num2;
  }

  if (num3 > highest) {
    highest = num3;
  }

  //   Find Middle
  if (num2 > lowest && num2 < highest) {
    middle = num2;
  }

  if (num3 > lowest && num3 < highest) {
    middle = num3;
  }

  console.log(lowest);
  console.log(middle);
  console.log(highest);
}

SortThreeNumbers(27, 18, 42);

// 10 - CheckTypes
function CheckTypes(text) {
  if (typeof text === 'string') {
    return 1;
  } else if (typeof text === 'number') {
    return 2;
  } else {
    return 3;
  }
}

console.log(CheckTypes('hello'));

// 11
function ChangeEveryALetters(text) {
  //   let result = '';

  //   for (let i = 0; i <= text.length - 1; i++) {
  //     if (text[i] === 'a' || text[i] === 'A') {
  //       result += '*';
  //     } else {
  //       result += text[i];
  //     }
  //   }

  //   return result;

  text = text.replaceAll('A', '*');
  text = text.replaceAll('a', '*');
  return text;
}

console.log(ChangeEveryALetters('An apple a day...'));
