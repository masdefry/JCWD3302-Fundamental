Hello, Full Stack Students✌️!

✔️Variabel

Variabel adalah tempat untuk menyimpan data agar bisa digunakan secara berulang dan diproses didalam program.

    🔹Deklarasi Variable
        var variableName;
        variableName = value;

        ___ or ___

        var variableName = value;

    🔹Aturan Penamaan Variable
        ▪️Harus diawali dengan huruf, dan beberapa special characters seperti `$` dan `_`
        ▪️Bersifat case sensitif
        ▪️Harus deskriptif dan jelas

    🔹Variable Syntax Declaration
        ▪️var
            ✅ Valuenya bisa diubah
            ✅ Pembuatan variable dengan nama yg sama (duplicate) diperbolehkan
            ❌ Tidak memiliki aturan scope

        ▪️let
            ✅ Valuenya bisa diubah
            ❌ Pembuatan variable dengan nama yg sama (duplicate) tidak diperbolehkan
            ✅ Memiliki aturan scope

        ▪️const
            ❌ Valuenya tidak bisa diubah
            ❌ Pembuatan variable dengan nama yg sama (duplicate) tidak diperbolehkan
            ✅ Memiliki aturan scope

✔️Data Types

Data types merupakan jenis data yang dapat disimpan dalam suatu varible sehingga dapat diolah oleh sebuah program.
Tipe data di Javascript terbagi menjadi 2:

    🔹Tipe Data Primitive
        Tipe data basic yang umum digunakan di banyak bahasa pemrograman:

        ▪️Integer    : Tipe data yang berisikan kumpulan angka
        ▪️String     : Tipe data yang nilainya diapit oleh petik ("", '', atau ``)
        ▪️Boolean    : Tipe data yang memiliki 2 nilai, yaitu true dan false
        ▪️Undefined
        ▪️Null

    🔹Tipe Data Non-Primitive
        Tipe data yang lebih kompleks dan dibentuk dari tipe data primitif.

        ▪️Array
        ▪️Object

✔️Comparison Operator

Comparison operator (operator perbandingan) adalah operator yang digunakan untuk membandingkan dua nilai. Hasil dari operasi ini selalu berupa boolean: true (benar) atau false (salah). Comparison operator yang ada di Javascript:

    ▪️>, >=, <, <=, !=, ==, ===

    📒Note:
        Perbedaan antara == dan === yaitu apabila == hanya membandingkan nilai saja, sedangkan === membandingkan nilai dan tipe data.
