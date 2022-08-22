// interface Person {
//     name: string;
//     age: number
// }

// const yaroslav: Person = {
//     name: 'Yaroslav',
//     age: 28,
// }

// function greet(person: Person){
//     console.log(`Hello, my name is ${person.name} and I am ${person.age} years old`)
// }

// const xasdz = 'asd'

// class Jarko {
//     constructor(){

//     }
//     // @ts-ignore
//     log(a: string){console.log(a)}
//     // @ts-ignore
//     log(a: number){console.log(a)}
// }

// const j = new Jarko()

// j.log(1)

// function buildDate(timestamp: number): Date;
// function buildDate(m: number, d: number, y: number): Date;
// function buildDate(mOrTimestamp: number, d?: number, y?: number): Date {
// if (d !== undefined && y !== undefined) {
//   return new Date(y, mOrTimestamp, d);
// } else {
//   return new Date(mOrTimestamp);
// }
// }

// const d1 = buildDate(87654321);
// const d2 = buildDate(2, 2, 2);
// console.log(d1)
// console.log(d2)

// type str = 'A' | 'B'

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
// }

// class hpscanner extends PrinterAndScanner {

// }

// const hp = new PrinterAndScanner()

// hp.print()

// function worker(stanok): void {
//   ////
// }

// interface ControlPanel {

// }

// function stanok3(electricity): void {

// }

// interface powerGenerator {

// }


// function wind(): void {}


abstract class Human {
  type: string;
  name: string;
  constructor(name: string){
    this.type = 'homo sapiens';
    this.name = name;
  }
  eat(food: string){
    console.log(`${this.name} eats ${food}`)
  }
}

class Person extends Human {
  constructor(name: string){
    super(name)
  }
}

const yaroslav = new Person('Yaroslav');
yaroslav.eat('grapes');
console.log(yaroslav.name)