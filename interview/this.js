const obj = {
  a: 10,
};

var a = 20;

function showThis() {
  return this.a;
}

const first = showThis();
const second = showThis.call(obj);
const third = showThis.apply(obj);
const fourth = showThis.bind({a: 'apple'})

console.log(first);
console.log(second);
console.log(third);
console.log(fourth());
