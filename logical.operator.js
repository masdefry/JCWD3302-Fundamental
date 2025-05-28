// > LOGICAL OPERATOR
// Operator pembanding untuk lebih dari 1 kondisi
// 1. AND &&
// - Apabila salah 1 kondisi bernilai false, maka hasil akhir akan false
// - Apabila ingin hasil akhir bernilai true, maka seluruh kondisi harus bernilai true
console.log(5 < 10 && 100 > 5); // true && true -> true
console.log('5' == 5 && 3 === '3'); // true && false -> false
console.log(true === true && false === false && 3 === 3); // true && true && true -> true

// 2. OR ||
// - Apabila salah 1 kondisi bernili true, maka hasil akhir akan true
// - Apabila ingin hasil akhir bernial false, maka seluruh kondisi harus bernilai false
console.log('5' === 5 || 5 == '5'); // false || true -> true
console.log(5 <= 5 || 3 < 3 || 'abc' != 'abc'); // true || false || false -> true

// 3. NOT !
console.log(!(5 <= 5) || 3 < 3 || 'abc' != 'abc'); // false || false || false -> false

/*
Challenge. Buatlah pengkondisian untuk memvalidasi input dari data berikut:
                name = ''
                email = ''
                password = ''
                ➡️ Output: 'Name, email, and password is required'

                name = 'Defryan'
                email = ''
                password = ''
                ➡️ Output: 'Name, email, and password is required'

                name = 'Defryan'
                email = 'defryan@gmail.com'
                password = 'abc12345'
                ➡️ Output: 'Submitting data successful'
*/
const name = '';
const email = '';
const password = 'abc12345';

if (name === '' || email === '' || password === '') {
  // true || true -> true
  console.log('Name, email, and password is required');
} else {
  console.log('Submitting data successful');
}

if (name && email && password) {
  console.log('Submitting');
} else {
  console.log('Name, email, and password is required');
}
