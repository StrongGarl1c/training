class Button {
  constructor() {
    this.a = 123;
    this.button = document.getElementById('demo');
    this.button2 = document.getElementById('demo2');
    this.button3 = document.getElementById('demo3');
    this.button.addEventListener('click', this.handleClick);
    this.button2.addEventListener('click', this.handleClick.bind(this));
    this.button3.addEventListener('click', this.handleClick3);
  }

  handleClick() {
    alert(this.a);
  }

  handleClick2() {
    alert(this.a);
  }

  handleClick3 = () => {
    alert(this.a);
  };
}

const btn = new Button();
console.log(btn);

// const obj = {
//   a: 'obj2',
//   regA: function(){
//     alert(this.a)
//   },
//   arrA: () => alert(this.a)
// }

// const a = 'asd'

// function regularA(){
//   alert(this)
// }

// const arrowA = () => alert(this)

// document.getElementById('demo4').addEventListener('click', regularA);
// document.getElementById('demo5').addEventListener('click', arrowA);
