// Logical AND (&&) evaluates operands from left to right,
// returning immediately with the value of the first falsy operand it encounters;
// if all values are truthy, the value of the last operand is returned.​

console.log(true && false);
console.log(false && true);
console.log(1 && 2);
// false
// false
// 2

console.log(
  false || (true && true),
  true && (false || false),
  2 == 3 || (4 < 0 && 1 == 1),
);

// true
// false
// false
