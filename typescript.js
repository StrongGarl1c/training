// interface Person {
//     name: string;
//     age: number
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Human = /** @class */ (function () {
    function Human() {
        this.type = 'homo sapiens';
    }
    Human.prototype.eat = function (food) {
        console.log(this.name + " eats " + food);
    };
    return Human;
}());
var Yaroslav = /** @class */ (function (_super) {
    __extends(Yaroslav, _super);
    function Yaroslav() {
        return _super.call(this) || this;
    }
    return Yaroslav;
}(Human));
var y = new Yaroslav();
y.eat('grapes');
