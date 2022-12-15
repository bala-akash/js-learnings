function fibonacci(a, b, limit) {
  let result = a + b;
  if (result < limit) {
    console.log(`${a} + ${b} = ${a + b}`);
    return fibonacci(b, result, limit);
  }
  return result;
}
fibonacci(0, 1, 100);
