const obj = {
  a: 1,
  b: 2,
  c: {
    nested: 'nested object',
  },
};


const copy = obj;
const copy2 = { ...obj };
const copy3 = JSON.parse(JSON.stringify(obj));

obj.a = 3;
obj.c.nested = 555;

console.log(obj);
console.log(copy);
console.log(copy2);
console.log(copy3);
