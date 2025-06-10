// > ASYNCHRONOUS
// 1. Fetching API
// 2. seTTimeOut
// 3. Ajax

// setTimeout(() => {
//   console.log('Executed!');
// }, 2000);
// console.log('>>>');
// console.log('<<<');

const db = [1, 2, 3, 4, 5];

// function DeleteItem() {
//   // Async - 2s
//   setTimeout(() => {
//     db.pop();
//   }, 1000);
// }

// function GetItem() {
//   // Async - 1
//   setTimeout(() => {
//     console.log(db);
//   }, 2000);
// }

// DeleteItem();
// GetItem();

// CALLBACK
function CbDeleteItem(cb) {
  // Async - 2s
  setTimeout(() => {
    db.pop();
    cb();
  }, 2000);
}

// CALLBACK HELL
CbDeleteItem(function () {
  CbDeleteItem(function GetItem() {
    // Async - 1
    setTimeout(() => {
      console.log(db);
    }, 2000);
  });
});




// PROMISE