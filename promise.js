// > PROMISE
const db = [1, 2, 3, 4, 5];

function PromiseDeleteItem() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (db.length > 0) {
        console.log('Deleting Data...');
        db.pop;
        resolve('Delete success');
      } else {
        console.log('X');
        reject('Database is empty');
      }
    }, 2000);
  });
}

function PromiseGetItem() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(db);
    }, 1000);
  });
}

// Handling Error Promise
// Promise Chaining (.then & .catch)
// PromiseDeleteItem()
//   .then((response) => {
//     return PromiseDeleteItem();
//   })
//   .then((response1) => {
//     return PromiseDeleteItem();
//   })
//   .then((response2) => {
//     return PromiseDeleteItem();
//   })
//   .then(() => {
//     return PromiseGetItem();
//   })
//   .then((response) => {
//     console.log('>>>');
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log('<<<');
//     console.log(error);
//   });

//  Async & Await
// async function AsyncAwait() {
//   try {
//     await PromiseDeleteItem();
//     await PromiseDeleteItem();
//     await PromiseDeleteItem();
//     const response = await PromiseGetItem();
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// AsyncAwait();

// Challenge. Lakukan call API ke jsonplaceholder menggunakan method async bawaan js yaitu fetch()
// https://jsonplaceholder.typicode.com/posts

async function FetchPosts() {
  try {
    let response = await fetch(
      'https://jsonsssplaceholder.typicode.com/postsss'
    ); // http request

    response = await response.json(); // convert json to object js
    console.log(response);
  } catch (error) {
    console.log('>>>');
    console.table(error);
  }
}
FetchPosts();
