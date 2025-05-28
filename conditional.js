// > CONDITIONAL
// Mengeksekusi code sesuai dengan kondisi yang ditentukan

// 1. if
/*
    if(condition){
        block of code;
    }
*/

if (5 < 10) {
  // true
  console.log('Executed');
}

if (5 === '5') {
  // false
  console.log('Running');
}

// 2. if - else
if (3 === '3') {
  // false
  console.log('Action-01');
} else {
  console.log('Default Action');
}

// 3. if - else if - else
const point = 85;

if (point >= 90) {
  console.log('Lulus dengan Nilai Sangat Baik');
} else if (point >= 85) {
  console.log('Lulus dengan Nilai Baik');
} else if (point >= 70) {
  console.log('Lulus dengan Nilai Cukup');
} else {
  console.log('Tidak Lulus');
}

// Challenge. Buatlah pengkondisian untuk memvalidasi value dari sebuah variabel
//              Name: '' ➡️ OUtput: 'Input is invalid'
//              Name: 0  ➡️ Output: 'Input is invalid'
//              Name: undefined ➡️ Output: 'Input is invalid'
//              Name: 'Defryan' ➡️ Output: 'Input valid'

const name = null;
if (name === '') {
  console.log('Input is invalid');
} else if (name === 0) {
  console.log('Input is invalid');
} else if (name === undefined) {
  console.log('Input is invalid');
} else {
  console.log('Input valid');
}

if (name) {
  console.log('Input valid');
} else {
  console.log('Input is invalid');
}
