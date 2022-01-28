class ElementFactory {
  constructor(name, text) {
    this.name = name;
    this.text = text;
  }

  createElement() {
    const newElement = document.createElement(this.name);
    newElement.innerText = this.text;
    document.body.appendChild(newElement);
  }
}

const div = new ElementFactory('div', 'first div');
div.createElement();

const hr = new ElementFactory('hr','');
hr.createElement();

const button = new ElementFactory('button', 'click me');
button.createElement();

