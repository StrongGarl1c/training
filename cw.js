function factorial(n) {
  // Add some code
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return BigInt(result)
}

factorial(5);
