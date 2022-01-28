// object stores its state privately, and only the object’s methods have access to change it.
class Parent {
  #encapsulated = 'private';
  getEncapsulatedProperty() {
    console.log(this.#encapsulated);
  }
}
const Yaroslav = new Parent();
Yaroslav.getEncapsulatedProperty();
console.log(Yaroslav.#encapsulated) // throws error
