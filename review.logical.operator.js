// > LOGICAL OPERATOR
// Membandingkan kondisi lebih dari 1

// AND (&&)
// Ketika salah 1 kondisi bernilai false, maka hasil akhir akan bernilai false
// Ketika ingin hasil akhir bernilai true, maka seluruh kondisi harus bernilai true
console.log(1 == 1 && 2 == 2); //true && true -> true
console.log(1 === '1' && 3 == 3 && 'abc' === 'abc'); //false && true && true -> false

// OR (||)
// Ketika salah 1 kondisi bernilai true, maka hasil akhir akan true
// Ketika ingin hasil akhir bernial false, maka seluruh kondisi harus bernilai false
console.log(1 == 1 || 3 === '3'); //true || false -> true
console.log('abc' === 'bde' || 3 === '3'); //false || false -> false


// ! (NOT)
