// > LOOPING
// Digunakan untuk menjalankan tugas yg sama berulang-ulang

// Case.
const greeting = 'Hello, World!';
// console.log(greeting);
// console.log(greeting);
// console.log(greeting);
// console.log(greeting);
// console.log(greeting);
// console.log(greeting);
// console.log(greeting);
// console.log(greeting);
// console.log(greeting);
// console.log(greeting);

// Syarat melakukan looping:
// 1. InitialValue
// 2. Condition
// 3. ExitWay

// 1. While
/*
    const initialValue;
    while(condition){
        task;
        exitWay;
    }
*/

let start = 1; // initialValue
while (start <= 10) {
  // condition
  console.log(greeting); // 10x
  start += 1; // exitWay
}

let i = 3;
while (i <= 11) {
  console.log('Executed');
  i++;
}

let j = 3;
while (j < 20) {
  j++;
  j++;
  j++;
}

// 2. Do While
/*
    let initialValue;

    do{
        task;
        exitWay;
    }while(condition)
*/

let init = 1;
do {
  console.log(greeting);
  init++;
} while (init <= 3);

// 3. For Loop
for (let i = 1; i <= 10; i++) {
  console.log(greeting);
}

// > BREAK & CONTINUE
// Break        : Untuk menghentikan looping
for(let i=1; i<=5; i++){
    console.log(i)
    if(i === 3) break;
}

// Continue     : Untuk men-skip 1x looping
for(let i=1; i<=5; i++){
    if(i === 3 || i === 4) continue;
    console.log(i)
}
