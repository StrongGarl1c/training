class Parent {
  constructor() {
    this.parentProperty = 'Parent property';
  }
}

class Child extends Parent {
  constructor() {
    super();
  }
  getParentProperty() {
    console.log(this.parentProperty);
  }
}

const child = new Child();
child.getParentProperty();
