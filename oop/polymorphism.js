class Parent {
  constructor() {}
  parentMethod() {
    console.log('Parent method');
  }
}

class Child extends Parent {
  constructor() {
    super();
  }
  parentMethod() {
    console.log('Child method');
  }
}

const child = new Child();
child.parentMethod();
