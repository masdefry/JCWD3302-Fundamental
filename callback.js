// > CALLBACK
// Fungsi yang dijadikan argument oleh fungsi lain

// Case. Buatlah function penjumlahan, kemudian hasil dari function penjumlahan tsb ditampilkan ke function output
function Penjumlahan(num1, num2) {
  return num1 + num2;
}

function Output(result) {
  console.log(result);
}

const result = Penjumlahan(3, 5); // 8
Output(result);

// 1. Indirect Callback
function InPenjumlahan(num1, num2, cb) { // num1 = 3, num2 = 3, cb = InOutput
  return cb(num1 + num2); // InOutput(3 + 3)
}

function InOutput(result) { // 6
  console.log(result); // 6
}

InPenjumlahan(3, 3, InOutput);

// 2. Direct Callback
/*
    cb = function DirOutput(result) {
        console.log(result); 
    }
*/
function DirPenjumlahan(num1, num2, cb) {  
  return cb(num1 + num2); 
}

DirPenjumlahan(3, 3, function (result) {
  console.log(result); 
});