class Demo {
  #hiddenProperty = 'asd';
  showHiddenProperty() {
    return this.#hiddenProperty;
  }
  #privateFunction() {
    return 123;
  }
  callPrivateFunction() {
    return this.#privateFunction();
  }
}

const demo = new Demo();

// console.log(demo.#hiddenProperty); error
console.log(demo.showHiddenProperty());
// console.log(demo.#privateFunction()) error
console.log(demo.callPrivateFunction())
