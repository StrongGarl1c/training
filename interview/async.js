const myPromise = new Promise((resolve) => {
  setTimeout(() => resolve(3), 0);
});

setTimeout(() => console.log(1), 0);
console.log(2);
myPromise.then((result) => console.log(result));
console.log(4);
