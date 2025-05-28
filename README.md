Hello, Full Stack Students✌️!

✔️Conditional Statement

Conditional statement digunakan untuk menjalankan kode tertentu berdasarkan suatu kondisi.

    🔹Macam-Macam Struktur Conditional

        ▪️if
            Syntax:
                if(condition){
                    task;
                }

        ▪️if-else
            Syntax:
                if(condition){
                    task;
                }else{
                    task;
                }

        ▪️if-else if-else
            Syntax:
                if(condition){
                    task;
                }else if(condition){
                    task;
                }else if(condition){
                    task;
                }else{
                    task;
                }

✔️Looping

Looping digunakan untuk menjalankan tugas secara berulang-ulang sampai suatu kondisi terpenuhi.
Beberapa parameter yang perlu diperhatikan pada looping:

▪️Inisialisasi : Berfungsi untuk menetapkan nilai awal variabel yang akan dipantau didalam looping

▪️Condition : Berfungsi untuk menentukan apakah looping akan terus dijalankan atau dihentikan.

▪️ExitWay : Berfungsi untuk menghindari terjadinya infinite loop. ExitWay bertugas untuk merubah variabel `inisialisasi` hingga akhirnya dapat merubah condition.

    🔹Jenis-Jenis Looping

        ▪️While
            Pengecekan kondisi dilakukan terlebih dahulu sebelum meng-eksekusi block of code.
            Syntax:

                initialValue;
                while(condition){
                    blockOfCode;
                    exitWay;
                }

            Example:

                let start = 1;

                while (start <= 10) {
                    console.log('Purwadhika');
                    start++;
                }

        ▪️Do-While
            Pengecekan kondisi dilakukan setelah menjalankan block of code.
            Syntax:

                initialValue;
                do{
                    blockOfCode;
                    exitWay;
                }while(condition)

            Example:

                let startLoop = 1;
                do {
                    console.log('Purwadhika');
                    startLoop++;
                } while (startLoop <= 10);

        ▪️For-Loop
            Mirip seperti `do-while`, namun dengan syntax yg lebih ringkas dan lebih mudah dibaca.
            Syntax:

                for(initialValue; condition; exitWay){
                    blockOfCode;
                }

            Example:

                for (let i = 1; i <= 10; i++) {
                    console.log('Purwadhika');
                }

✔️Logical Opertator

Digunakan untuk menggabungkan lebih dari 1 kondisi dan menghasilkan nilai akhir berupa boolean (true atau false). Berikut logical operator yang ada di Javascript:

        🔹|| (OR)
            ▪️Salah satu kondisi bernilai true, maka hasil akhir akan bernilai true.
            ▪️Jika ingin hasil akhir bernilai false, maka seluruh kondisi harus bernilai false.

                    let punyaSIM = false;
                    let punyaSuratIzin = true;

                    if (punyaSIM || punyaSuratIzin) {
                        console.log('Boleh mengemudi');
                    }

        🔹&& (AND)
            ▪️Salah satu kondisi bernilai false, maka hasil akhir akan bernilai false.
            ▪️Jika ingin hasil akhir bernilai true, maka seluruh kondisi harus bernilai true.

                    let usia = 17;
                    let punyaKTP = false;

                    if (usia >= 17 && punyaKTP) {
                        console.log('Tidak boleh ikut pemilu');
                    }

        🔹! (NOT)
            ▪️Negasi atau membalikan nilai boolean.

                    let login = false;

                    if (!login) {
                        console.log("Silakan login terlebih dahulu");
                    }

✔️Truthy & Falsy

Dalam JavaScript, `truthy` dan `falsy` adalah istilah yang digunakan untuk menggambarkan bagaimana nilai non-boolean dikonversi menjadi nilai boolean dalam konteks seperti conditional statement (if), logical operator, dll. Secara sederhana, truthy-falsy memiliki kegunaan untuk mempersingkat penulisan syntax.

Kita bisa ambil contoh dari code berikut:

        let nama='';

        if(nama === ''){
            console.log('Nama belum diisi')
        }else{
            console.log('Nama telah diisi')
        }

Dari contoh code diatas, pengkondisian didalam if agak terlalu panjang dalam penulisannya. Sehingga bisa
kita persingkat menjadi seperti ini:

        let nama='';

        if(!nama){
            console.log('Nama belum diisi')
        }else{
            console.log('Nama telah diisi')
        }
