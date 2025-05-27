// > VARIABLE

// Case. Buatlah program untuk menampilkan 'Purwadhika School' sebanyak 10x (tanpa menggunakan loop)
console.log('Purwadhika');
console.log('Purwadhika');
console.log('Purwadhika');
console.log('Purwadhika');
console.log('Purwadhika');
console.log('Purwadhika');
console.log('Purwadhika');
console.log('Purwadhika');
console.log('Purwadhika');

var schoolName = 'Purwadhika Digital School';
console.log(schoolName);
console.log(schoolName);
console.log(schoolName);
console.log(schoolName);
console.log(schoolName);
console.log(schoolName);
console.log(schoolName);
console.log(schoolName);
console.log(schoolName);
console.log(schoolName);

// > Variable Naming Rules
// 1. Tidak boleh menggunakan spasi

// 2. Harus diawali dengan huruf atau underscore (_) atau dollar sign ($)

// 3. Deskriptif dan jelas

// 4. Format penulisan: camelCase, PascalCase, snake_case
var presidentName = 'Bung Karno'; // camelCase
var PresidentName = 'Bung Karno'; // PascalCase
var president_name = 'Bung Karno'; // snake_case

// > Updating Value
var programs = 'Job Connector Web Development';
programs = 'JCWD';
console.log(programs);

var campus = 'BSD';
var campus = 'JKT';
// Tidak sama dengan yang bawah

var campusPwd = 'SBY';
campusPwd = 'YGK';

// > Var x Let x Const

// Var
// 1. Memungkinkan kita membuat variable dengan nama yg sama
var school = 'Purwadhika';
var school = 'Purwadhika School';

// 2. Value nya bisa diubah/diupdate
var fruit = 'Apel';
fruit = 'Jeruk';
console.log(fruit);
// 3. Tidak ada aturan scope

// Let
// 1. Tidak diperbolehkan membuat variable dengan nama yg sama
// let course = 'JCWD';
// let course = 'JCDM';

// 2. Value nya bisa diubah/diupdate
let product = 'Sepatu';
product = 'Kaos';
console.log(product);
// 3. Ada aturan scope

// Const
// 1. Tidak diperbolehkan membuat variable dengan nama yg sama
// const campus = 'BSD';
// const campus = 'JKT';

// 2. Value nya tidak bisa diubah/diupdate
const food = 'Pizza';
food = 'Jus';

// 3. Ada aturan scope
