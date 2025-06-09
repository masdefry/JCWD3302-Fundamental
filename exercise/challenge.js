/*
    01 - Hitung Diskon Belanja
    Buat function untuk menghitung diskon berdasarkan total belanja, dengan ketentuan:
    - Jika total belanja lebih dari 500.000, diskon yang didapat 20%
    - Jika total belanja lebih dari 300.000, diskon yang didapat 10%
    - Jika total belanja lebih dari 150.000, diskon yang didapat 5%
    - Selain ketentuan diatas, maka tidak mendapatkan diskon belanja
*/

function CountDiscount(totalBelanja) {
  let potonganHarga = 0;
  let totalBelanjaAkhir = 0;
  if (totalBelanja >= 500000) {
    potonganHarga = totalBelanja * 0.2;
    totalBelanjaAkhir = totalBelanja - potonganHarga;
    console.log(
      `Total Belanja Dari ${totalBelanja} yang Mendapatkan Diskon 20% yaitu ${
        totalBelanja - totalBelanja * 0.2
      }`
    );
  } else if (totalBelanja >= 300000) {
    potonganHarga = totalBelanja * 0.1;
    totalBelanjaAkhir = totalBelanja - potonganHarga;
    console.log(
      `Total Belanja Dari ${totalBelanja} yang Mendapatkan Diskon 10% yaitu ${totalBelanjaAkhir}`
    );
  } else if (totalBelanja >= 150000) {
    potonganHarga = totalBelanja * 0.05;
    totalBelanjaAkhir = totalBelanja - potonganHarga;
    console.log(
      `Total Belanja Dari ${totalBelanja} yang Mendapatkan Diskon 5% yaitu ${totalBelanjaAkhir}`
    );
  } else {
    console.log('Tidak mendapatkan diskon');
  }
}
CountDiscount(550000);

/*
    Hitung Diskon Belanja
    Buat function untuk menghitung diskon berdasarkan total belanja dan total item yang dibeli:
    - Jika total belanja lebih dari 300.000, dan jumlah item yang dibeli sebanyak 5, diskon yang didapat 10%
    - Jika total belanja lebih dari 300.000, dan jumlah item yang dibeli sebanyak 10, diskon yang didapat 15%
    - Selain ketentuan diatas, maka tidak mendapatkan diskon belanja

    Parameter Input:
    - totalBelanja  -> 500000
    - arrOfString   -> ['Cimory', 'Chitato', 'Panadol']
*/

function CountDiscountNew(totalBelanja, arrOfString) {
  if (totalBelanja >= 300000 && arrOfString.length === 5) {
    console.log(
      `Total Belanja = ${totalBelanja} & Total Item = ${arrOfString.length} = ${
        totalBelanja - totalBelanja * 0.1
      }`
    );
  } else if (totalBelanja >= 300000 && arrOfString.length === 10) {
    console.log(
      `Total Belanja = ${totalBelanja} & Total Item = ${arrOfString.length} = ${
        totalBelanja - totalBelanja * 0.15
      }`
    );
  } else {
    console.log('Tidak mendapatkan diskon');
  }
}

CountDiscountNew(500000, ['Cimory', 'Chitato', 'Panadol', 'Beras', 'Tepung']);
CountDiscountNew(500000, ['Cimory', 'Chitato', 'Panadol']);

/*
    02 - Hitung Jumlah Bilangan Ganjil dan Genap
    Buat function untuk menghitung jumlah bilangan ganjil maupun genap dari deret array:

    ex. Input   : [100, 200, 3, 5, 6]
        Output  : Jumlah Bilangan Genap = 3, Jumlah Bilangan Ganjil = 2
*/

function CountEvenAndOdd(arrOfNumbers) {
  let countEven = 0;
  let countOdd = 0;

  for (let item of arrOfNumbers) {
    if (item % 2 === 0) {
      countEven++;
    } else {
      countOdd++;
    }
  }

  return `Jumlah Bilangan Genap = ${countEven}, Jumlah Bilangan Ganjil = ${countOdd}`;
}

console.log(CountEvenAndOdd([100, 200, 3, 5, 6]));

/*
    03 - Palindrome Array
    Buat function untuk mengecek apakah input dari sebuah array merupakan palindrome (urutan sama dari depan ke belakang)

    ex. Input   : [100, 5, 3, 5, 100]
        Output  : Palindrome

        Input   : [1, 2, 3, 2, 5]
        Output  : Not Palindrome

        Input   : [1, 2, 2, 1]
        Ouput   : Palindrome
*/

function PalindromeArray(arrOfNums) {
  let halfIndex = arrOfNums.length / 2;
  let isPalindrome = 'Palindrome';

  for (let i = 0; i < halfIndex; i++) {
    if (arrOfNums[i] !== arrOfNums[arrOfNums.length - 1 - i]) {
      isPalindrome = 'Not Palindrome';
      break;
    }
  }

  return isPalindrome;
}

console.log(PalindromeArray([100, 5, 3, 5, 100]));
console.log(PalindromeArray([1, 2, 3, 2, 5]));
console.log(PalindromeArray([1, 2, 2, 1]));

/*
    04 - Pattern
    Buat function untuk mencetak garis miring dengan pattern bintang

    ex. Input   : 5
        Output  :      *
                      *
                     *
                    *
                   *  
*/
