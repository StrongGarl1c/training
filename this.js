// An object can be passed as the first argument to call or apply and this will be bound to it.
// var obj = { a: 'Custom' };

// // We declare a variable and the variable is assigned to the global window as its property.
// var a = 'Global';

// function whatsThis() {
//   return this.a; // The value of this is dependent on how the function is called
// }

// const logA = () => {
//   console.log(this.a);
// };

// console.log(whatsThis())       // 'Global' as this in the function isn't set, so it defaults to the global/window object
// console.log(whatsThis.call(obj));  // 'Custom' as this in the function is set to obj
// console.log(whatsThis.apply(obj)); // 'Custom' as this in the function is set to obj

// console.log(Exported.step(logA()));

class ABC {
  constructor() {
    this.asd = 'asd';
  }
  ab() {
    return this.asd;
  }
  bc = () => this.asd;
  cd() {
    function go() {
      return this.asd;
    }
    return go();
  }
  de() {
    const go = () => {
      return this.asd;
    };
    return go();
  }
  ed = () => {
    const go = () => {
      return this.asd;
    };
    return go();
  };
  fg = () => {
    function go() {
      return this.asd;
    }
    return go();
  };
  deep() {
    function go() {
      const asd = 'ap'
      function ap() {
        const asd = 'ap'
        const g = () => this.asd;
        return g();
      }
      return ap();
    }
    return go();
  }
}

const x = new ABC();
console.log(x.deep());
