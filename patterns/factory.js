class ElementFactory {
  constructor(name, text) {
    this.name = name;
    this.text = text;
    this.newElement = document.createElement(this.name);
    this.newElement.innerText = this.text;
    document.body.appendChild(this.newElement);
  }

}

const div = new ElementFactory('div', 'first div');
const hr = new ElementFactory('hr','');
const button = new ElementFactory('button', 'click me');
