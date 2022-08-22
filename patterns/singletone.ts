class Jarko {
  time: number;
  private static instance: Jarko;
  constructor() {
    if (Jarko.instance) {
      return Jarko.instance;
    }
    this.time = Math.random();
    Jarko.instance = this;
  }
}

const j = new Jarko();
const k = new Jarko();

console.log(j.time);
console.log(k.time);
console.log(j.time === k.time);
