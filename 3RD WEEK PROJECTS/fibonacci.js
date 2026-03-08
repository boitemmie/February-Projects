function fibonacciGenerator(n) {
  if (n === 0) return [];
  if (n === 1) return [0];

  let output = [0, 1];

  for (let i = 2; i < n; i++) {
    let nextNumber = output[output.length - 2] + output[output.length - 1];
    output.push(nextNumber);
  }

  return output;
}

console.log(fibonacciGenerator(10));
