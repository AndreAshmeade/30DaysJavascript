let createCounter = function (n) {
  let i = 0;
  return () => n + i++;
};

const counter = createCounter(10);
console.log(counter());

console.log(counter());

console.log(counter());
