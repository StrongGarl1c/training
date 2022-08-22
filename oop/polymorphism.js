class Parent {
  constructor() {}
  parentMethod() {
    console.log('Parent method');
  }
}

class Child extends Parent {
  constructor() {
    super();
    // super.parentMethod = console.log(123)
  }
  parentMethod() {
    console.log(123)
  }
}

const child = new Child();
child.parentMethod();
