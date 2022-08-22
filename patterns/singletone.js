var Jarko = /** @class */ (function () {
    function Jarko() {
        if (Jarko.instance) {
            return Jarko.instance;
        }
        this.time = Math.random();
        Jarko.instance = this;
    }
    return Jarko;
}());
var j = new Jarko();
var k = new Jarko();
console.log(j.time);
console.log(k.time);
console.log(j.time === k.time);
