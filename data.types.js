// > DATA TYPES / TIPE DATA
// 1. Primitive Data Type       : String, Number, Boolean, Undefined, Null
// 2. Non-Primitive Data Type   : Array, Object, Map, Set

// 1. String    : Tipe data yang valuenya dibungkus dengan "" atau '' atau ``
var name = `Defryan`;
console.log(typeof name);

// 2. Number
var point = 100;
console.log(typeof point);

// 3. Boolean   : Tipe data yang memiliki 2 value, yaitu true atau false
var isGraduated = true;
console.log(typeof isGraduated);

// 4. Null & Undefined
var hobby = null;
var age; // Default valuenya adalah undefined
console.log(age);

// > METHODS
// Code siap pakai yang bisa gunakan untuk memanipulasi data

// 1. String Method

// - Length : Menghitung jumlah karakter didalam string
let description = 'Lorem ipsum dolor';
console.log(description.length);

// - Slice  : Mengambil beberapa bagian karakter
let school = 'PwdDgtlSchl';
console.log(school.slice(0, 3));

let comment = 'Mantap nih gan!';
console.log(comment.slice(3, 5)); // ta

// - toUpperCase & toLowerCase
let title = 'HeLlO wOrlD!';
console.log(title.toUpperCase());
console.log(title.toLowerCase());

// - Substring
let desc = 'Hello, iam Defryan';
console.log(desc.substring(5, 0));

// - CharAt
console.log(desc.charAt(4));

// 2. Number Method

// - ToString
let poin = 100;
console.log(typeof poin.toString());

// Challenge. Ubah 3 karakter akhir dari phone number menjadi ***
//            Input : 6281214173000
//            Output: '6281214173***'

let input = 6281214173000; // 13-3 = 10
input = input.toString();
console.log('Hidden Phone Number:' + input.slice(0, -3) + '***');
console.log(`Hidden Phone Number: ${input.slice(0, -3)} ***`); // String template literal

// 5. Date
let date = new Date();

console.log(date.getMonth() + 1); // 4
console.log(date.getFullYear()); // 2025
console.log(date.getDate()); // 27
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
