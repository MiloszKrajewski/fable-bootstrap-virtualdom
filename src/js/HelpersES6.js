function* fib() {
  var a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

export function greet() {
  let a = [];
  for (let n of fib()) { if (a.push(n) > 10) break; }
  let generator = () => `Greetings from ES6 module ${a}`;
  console.log(generator());
}