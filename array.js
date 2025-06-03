// > ARRAY
// Struktur data, dapat menampung lebih dari 1 value

let student1 = 'Ghazi';
let student2 = 'Yusril';
let student3 = 'Fachri';
// Ribuan - Jutaan

// Pendeklarasian Array
const students = ['Ghazi', 'Yusril', 'Fachri'];
console.log(students[2]);

students[2] = 'Raihan';
console.log(students);

delete students[2];
console.log(students);

const numbers = [
  'abc',
  1,
  true,
  false,
  undefined,
  null,
  ['Purwadhika', ['Digital', 'School']],
];

console.log(numbers[6][0]);
console.log(numbers[6][1][1]);

// > ARRAY METHODS
// .length  : Mendapatkan total item didalam array
const cars = ['Toyota', 'Daihatsu', 'Honda'];
console.log(cars.length);

// .push    : Menambahkan item baru di index paling akhir
// .pop     : Menghapus item di index paling akhir
// .unshift : Menambahkan item baru di index paling awal
// .shift   : Menghapus item di index paling awal
const fruits = ['Semangka', 'Apel', 'Jeruk'];
fruits.push('Mangga'); // [Semangka, Apel, Jeruk, Mangga]
fruits.push('Durian'); // [Semangka, Apel, Jeruk, Mangga, Durian]
fruits.pop(); // [Semangka, Apel, Jeruk, Mangga]
fruits.unshift('Nanas'); // [Nanas, Semangka, Apel, Jeruk, Mangga]
fruits.shift();
console.log(fruits);

// .indexOf    : Mencari index item didalam array. Mengembalikan nilai index apabila datanya ada, dan mengembalikan nilai -1 apabila datanya tidak ada
const programs = ['jcwd', 'jcdm', 'jcuiux', 'jcds'];
console.log(programs.indexOf('jcwd')); // 0
console.log(programs.indexOf('JCWD')); // -1 (Not found)

// .lastIndexOf
const studentsJCWD = ['Immanuel', 'Aboy', 'Abed', 'Aboy'];
console.log(studentsJCWD.lastIndexOf('Aboy'));

// .slice   : Mengambil sebagian item
const campus = ['BSD', 'JKT', 'BDG', 'SBY', 'JOG'];
console.log(campus.slice(0, 1));
console.log(campus.slice(2, 4));
console.log(campus.slice(2, 5));

// .splice  : Delete ataupun update ataupun add
/*
    arr.splice(startIndex, totalDataToDelete, newData)
*/
const siswa = ['Immanuel', 'Defryan', 'Ansor', 'Yuke', 'Anne'];
siswa.splice(2, 0, 'Fachri');
console.log(siswa);
