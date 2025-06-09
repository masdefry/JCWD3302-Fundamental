// > CONDITIONAL STATEMENT
// Memutuskan code mana yg akan di eksekusi

// 1. if
/*
    if(condition){
        block of code;
    }
*/
let umur = 15;

if (umur > 17) {
  // 15 > 17? false
  console.log('Umur Mencukupi!');
}

// 2. if - else
if (umur > 17) { // 15 > 17? false
  console.log('Umur Mencukupi!');
} else {
  console.log('Umur Belum Cukup!');
}

// 3. if - else if - else if - else if - else
if(umur > 17){
    console.log('Umur Mencukupi!')
}else if(umur >= 15){
    console.log('Umur Hampir Mencukupi!')
}else{
    console.log('Umur Belum Cukup!')
}