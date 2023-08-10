const walkable = {
  walk: function () {
    console.log(`${this.name} walk`);
  },
};

const swiable = {
  swim: function () {
    console.log('swim');
  },
};

const flyable = {
  fly: function () {
    console.log('fly');
  },
};

const duck = { name: 'Donald' };
Object.assign(duck, walkable, swiable, flyable);
duck.walk();
delete flyable.fly;
console.log(flyable);
duck.fly()