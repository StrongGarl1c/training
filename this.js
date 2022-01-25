// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     getA: () => console.log(this.a),
//     getB: function() { console.log(this.b) },
//     getC: {
//         arrow: () => console.log(this.c)
//     }
// }

// const a = 100;

// // obj.getA();
// // obj.getB();
// // obj.getC.arrow();

// const arrow = () => console.log(this.a);

// function go(){
//     console.log(this.a)
// }

// window.go();
// window.arrow()

// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = {a: 'Custom'};

// We declare a variable and the variable is assigned to the global window as its property.
var a = 'Global';

function whatsThis() {
  return this.a;  // The value of this is dependent on how the function is called
}

console.log(whatsThis())       // 'Global' as this in the function isn't set, so it defaults to the global/window object
console.log(whatsThis.call(obj));  // 'Custom' as this in the function is set to obj
console.log(whatsThis.apply(obj)); // 'Custom' as this in the function is set to obj