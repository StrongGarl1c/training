let str = 'new world';
str.replace('new', 'hello');
console.log(str);

let a = 10;
let b = a;
let obj = {
    c: 10
}
let d = obj;
a = 20;
obj.c = 20;

console.log(b + d.c); // ?