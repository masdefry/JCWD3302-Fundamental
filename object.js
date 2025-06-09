// > OBJECT

const product = {
  name: 'Apel', // name: key, 'Apel': value -> name: 'Apel' (property)
  price: 15000,
  stock: 10,
};

console.log(product.name);
console.log(product['price']);

product.name = 'Mangga';
product.price = 10000;
product.stock = 5;
console.log(product);

delete product.stock;
console.log(product);

const student = {
  name: 'Defryan',
  moduleExam: {
    modul1: 90,
    modul2: 100,
    modul3: 100,
  },
};
student.moduleExam.modul1;

// > ARRAY of OBJECT
const arrProducts = [
  { name: 'Apel', price: 10000, stock: 10 },
  { name: 'Mangga', price: 15000, stock: 15 },
];

console.log(arrProducts[1].name);
console.log(arrProducts[1]['name']);

for (let item of arrProducts) {
  console.log(item.price);
  console.log(item.name);
  console.log(item.stock);
}

// > DESTRUCTURE ARRAY/OBJECT
// Menyimpan value/property didalam object menjadi masing-masing variable

const car = {
  name: 'Honda',
  color: 'Gray',
};

const { color, name } = car;
console.log(name);
console.log(color);
console.log(car);

// > SPREAD OPERATOR (...)
// 1. Copy by value
// 2. Menambahkan property baru

const user = {
  username: 'defryan',
  email: 'defryan@gmail.com',
};

// Copy by value
const newUser = { ...user, username: 'deryan2025', password: 'abc12345' };
newUser.username = 'ryan';
console.log(newUser);
console.log(user);

// > OPTIONAL CHAINING
/*
Merupakan fitur di Javascript yang memungkinkan kita untuk mengakses nested property dengan aman.
Anggaplah response data dari API yang seharusnya seperti pada code berikut:

    const response = {
        user: {
            profile: {
                name: 'Defryan', 
                address: 'Bogor, Kab.',
                phoneNumber: '087822113344'
            }
        }
    };

    Namun response yang kita dapat seperti pada code berikut:

    const response = {
        user: {}
    };
*/

const response = {
  user: {},
};

console.log(response?.user?.profile?.name);
