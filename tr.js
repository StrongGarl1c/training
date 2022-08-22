// let str = 'asdzxc';
// let asd = {
//     str: 'qwe'
// }
// class Jarko {
//     constructor(){
//         this.str = 123
//         this.log = () => this.str
//         this.reg = function(){return this.str}
//     }
// }

// const yar = new Jarko()

// console.log(yar.reg())

// function go(a,b,...asd){
//     console.log(Array.isArray(asd))
// }
// go(1,2,3,4,5)
// const prom1 = new Promise( (reslove,reject) => {
//     // reslove(1)
//     reject(1)
// })
// const prom2 = new Promise( reslove => {
//     reslove(2)
// })
// const prom3 = new Promise( (reslove, reject ) => {
//     reject(3)
//     // reslove(3)
// })

// const x = Promise.race([prom1,prom2,prom3])
// x.then((result) => console.log(result)).catch(e => console.log('error ' + e))

// const go = function(){}

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200],
//     [go, 3]
//   ]);

// console.log(fruits.get(go))

// const obj = {
//   a: 123,
//   b: () => this.a
// }

// const obj2 = new Object({});
// obj2.a = 321;
// obj2.b = () => this.a;
// obj2.c = function() { return this.a }
// const x = obj2.b()
// // console.log(obj2.a)
// // console.log(obj2.b)
// console.log(obj2.c())

// class Person {
//   constructor(first, last, age) {
//     this.first = first;
//     this.last = last;
//     this.age = age;
//     this.logAge = () => this.age;
//     this.reg = function () {
//       return this.age;
//     };
//   }
// }

// const Yaroslav = new Person('Yaroslav', 'Pitsur', 28);

// class Teacher extends Person{
//   constructor({first,last,age}){
//     super(first,last,age);
//     this.subject = 'JavaScript';
//     // this.rest = rest;
//     this.age = 100
//   }
// }

// const Jarko = new Teacher(Yaroslav)

// // console.log(Jarko.age);
// // console.log(Jarko.first);
// // console.log(Jarko.subject);
// // console.log(Jarko.rest);
// console.log(Jarko.reg())
// console.log(Jarko.logAge())
// // console.log(Yaroslav)

// function compStr(actual, expected) {
//   let str1 = '', str2 = '';
//   for (let i = 0; i < actual.length; i++) {
//     if (actual[i] !== expected[i] ) {
//       str1 += actual[i];
//       str2 += expected[i];
//     }
//   }
//   console.log(`Actual: ${str1}`)
//   console.log(`Expected: ${str2}`)
// }

// let str1 = 'Retrieve and Label Labware.'
// let str2 = 'Retrieve and label labware.'

// compStr(str1,str2)

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// const x = Object.values(obj).join(" | ")
// console.log(x)

// class Printer {
//   constructor(){

//   }
//   print(){
//     console.log('printed')
//   }
// }

// class PrinterAndScanner extends Printer {
//   constructor(){
//     super()
//   }
//   print = 1
// }

// const hp = new PrinterAndScanner()

// hp.print()

// const flyable = {
//     fly(){
//         console.log('fly')
//     }
// }
// const swimable = {
//     swim(){
//         console.log('swim')
//     }
// }
// const walkable = {
//     walk(){
//         console.log('walk')
//     }
// }

// const duck = Object.assign({},flyable,swimable,walkable)

// duck.fly()
// duck.walk()

// class Walk {
//     constructor() {
//         this.name = 'asdzxc'
//         this.walk = function (){ console.log('walk')}
//     }
// }

// class Swim {
//     constructor(){
//         this.swim = function() {
//             console.log('swim')
//         }

//     }
// }

// class Duck {
//     constructor(){
//         Object.assign(this, new Walk(), new Swim())
//     }
// }

// const DonaldDuck = new Duck()
// DonaldDuck.walk()
// DonaldDuck.swim()

// function go(asd = 10){
//     console.log(asd)
// }

// go()
// go(1000)

let obj1 = {
    a: 1
}

let obj2 = {
    a: b
}

