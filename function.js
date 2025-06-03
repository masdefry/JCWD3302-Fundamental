// > FUNCTION
// 1. Deklaratif Function (Function Declaration)
/*
    function functionName(){
        Block of code;
    }
*/

// 2. Function Ekspresi (Function Expression)
/*
    var functionName = function(){
        Block of code;
    }
*/

// 3. Arrow Function
/*
    var functionName = () => {
        Block of code;    
    }
*/

function greet() {
  console.log('Hello, User!');
}
greet();

var print = function () {
  console.log('Hello, New User!');
};
print();

const output = () => {
  console.log('Hello, Newest User!');
};
output();

// > PARAMETER & ARGUMENT
function greet(username) {
  // username -> parameter
  console.log(`Hello, ${username}`);
}
greet('Defryan'); // 'Defryan' -> Argument
greet(123); // 123 -> Argument

function println(username, email, password) {
  console.log(
    `Hello, ${username}. Your email is ${email} and password is ${password}`
  );
}

println('defryan', 'ryan@gmail.com', 'abc12345');

// > DEFAULT PARAMETER
function printData(username = 'username', hobby = 'Ngoding') {
  console.log(`Hello, ${username}. My hobby is ${hobby}`);
}

printData('aboy', 'nonton');

// > Function with Return
// Function yang mengembalikan nilai. Sering digunakan apabila hasil dari sebuah function akan diproses di function lain
function Sum(num1, num2) {
  return num1 + num2;
}

let resultSum = Sum(5, 5);
console.log(resultSum);
console.log(Sum(3, 3));

// Challenge.
// Buatkan function untuk perkalian dan pembagian, dimana function tersebut dapat menerima 2 argumen angka (number1, number2).
// Gunakan function output untuk menampilkan hasil dari function perkalian/pembagian di terminal.
function Perkalian(num1, num2) {
  return `Hasil Perkalian ${num1} * ${num2} = ${num1 * num2}`;
}

function Pembagian(num1, num2) {
  return `Hasil Pembagian ${num1}/${num2} = ${num1 / num2}`;
}

function Output(result) {
  console.log(result); // `Hasil Pembagian = Result` || `Hasil Perkalian = Result`
}

let resultPembagian = Pembagian(9, 3);
Output(resultPembagian);
let resultPerkalian = Perkalian(10, 10);
Output(resultPerkalian);

// > REST PARAMETER
function PrintOut(param1, param2, ...manyMore) {
  console.log(param1); // 1
  console.log(param2); // 2
  console.log(manyMore); // [3, 4, 5, dst]
}

PrintOut(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Outer Function (Global Scope)
function First() {
  // Local Scope
  let num = 10;
  let string = 'abc';

  // Inner Function
  function Second() {
    console.log(num); // Closure -> Inner function yang mengakses variable milik outer function
    num = 20;
  }

  console.log(num);
  console.log(string);
}
First();
