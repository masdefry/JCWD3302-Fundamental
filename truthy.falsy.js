// > TRUTHY FALSY
// Nilai non-booelan yang dikonversi menjadi nilai boolean
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));

const number = 0;

if (number) {
  // false
  console.log('Ok');
} else {
  console.log('Not-Ok');
}

const name = '';
if (name) {
  // false
  console.log('Valid');
} else {
  console.log('Invalid');
}

const email = ' ';
if (email) { // true
  console.log('Email valid');
} else {
  console.log('Email invalid');
}


