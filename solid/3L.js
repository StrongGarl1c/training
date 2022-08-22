// // console.log(Object)
// Object.toString = function(){return 123}
// // console.log(Object.toString())
// let num = 333
// console.log(num.toString())

class Parent {
  constructor(){
    this.age = 50;
    Object.toString = 123;
  }
}



class Child extends Parent{
  constructor(){
    super()
  }
  asd(){
    return this.age.toString()
  }
}

const x = new Parent()
// console.log(typeof x.asd())
console.log(typeof Math.random().toString())
