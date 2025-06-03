Hello, Full Stack Students✌️!

✔️Array

Array adalah struktur data yang digunakan untuk menyimpan sekumpulan data (nilai) dalam satu variable.
Tiap nilai yang disimpan didalam array disebut dengan `element` atau `item`. Dan tiap-tiap `element`
atau `item` didalam array dapat diakses dengan menggunakan index penomoran yang dimulai dari 0.

💡Case:
Kita memiliki list data student. Tanpa menggunakan array, code untuk menyimpan list data student tersebut menjadi
seperti ini:

    let student1 = 'Bobby';
    let student2 = 'Immanuel';
    let student3 = 'Aviawan';

Dengan menggunakan array, maka kita hanya perlu membuat 1 variable yang berisikan 3 list students didalamnya:

    let students = ['Bobby', 'Immanuel', 'Aviawan'];

    🔹Array Declaration

        let fruits = ['Apple', 'Mango', 'Orange'];

    🔹Accessing Array

        fruits[0] // Apple
        fruits[1] // Mango
        fruits[2] // Orange

    🔹Update Item in Array

        fruits[0] = 'Pineaple' // Apple ➡️ Pineaple

    🔹Delete Item in Array

        delete fruits[1]

✔️Destructuring Array

Fitur yang memungkinkan untuk mengambil item dari dalam array dan menyimpannya ke dalam masing-masing variable.
Bisa dilihat dari contoh berikut:

    const fruits = ['Apple', 'Mango', 'Orange']
    const fruit1 = fruits[0];
    const fruit2 = fruits[1];
    const fruit3 = fruits[2];

Alih-alih seperti cara diatas, kita bisa persingkat dengan menggunakan destructure array sebagai berikut:

    ✅ Destructure semua item

    const fruits = ['Apple', 'Mango', 'Orange']
    const [fruit1, fruit2, fruit3] = fruits;

    console.log(fruit1) // Apple
    console.log(fruit2) // Mango
    console.log(fruit3) // Orange

    ___ or ___

    ✅ Destructure item `Apple` dan `Mango`

    const fruits = ['Apple', 'Mango', 'Orange']
    const [fruit1, fruit2] = fruits;

    console.log(fruit1) // Apple
    console.log(fruit2) // Mango

    ___ or ____

    ✅ Destructure item `Orange` saja

    const fruits = ['Apple', 'Mango', 'Orange']
    const [, , fruit] = fruits;

    console.log(fruit) // Orange

Dengan destructure array, maka:

▪️Code jadi lebih ringkas dan mudah dibaca.

▪️Bisa digunakan untuk mengambil sebagian nilai saja.

✔️Function

Function merupakan salah 1 fitur didalam bahasa pemrograman yang berfungsi untuk memuat
block of code kita sehingga dapat digunakan berulang kali. Function dapat mempermudah pemrograman, karena:

▪️Code jadi lebih rapi dan modular

▪️Menghindari penulisan code yang sama berulang-ulang

▪️Mempermudah debugging

    🔹Function Types

        ▪️Declarative Function

            function functionName(){
                blockOfCode;
            };

            functionName()

        ▪️Function Expression

            const functionName = functionName(){
                blockOfCode;
            };

            functionName()

        ▪️Arrow Function

            const functionName = () => {
                blockOfCode;
            };

            functionName()

    🔹Function with Parameters & Function with Default Parameters

        function Greeting(name, hobby){
            return `Hello, Iam ${name} and my hobby is ${hobby}`;
        };

        function Greeting(name = 'Student', hobby = 'Coding'){
            return `Hello, Iam ${name} and my hobby is ${hobby}`;
        };
