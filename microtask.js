// let i = 3;
// console.log(1);
// setTimeout(() => console.log(2), 0);
// (function go() {
//   queueMicrotask(() => console.log(i));
//   i++;
//   if (i == 20) {
//     return;
//   }
//   go();
// })();
const prom = new Promise((resolve) => {
  resolve(3);
});
const prom2 = new Promise((resolve) => {
  resolve(6);
});

console.log(1);
setTimeout(() => console.log(2), 0);
prom.then((x) => console.log(x));
console.log(4);
setTimeout(() => console.log(5), 0);
prom2.then((x) => console.log(x));
