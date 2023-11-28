function memoize(fn) {
  let data = {};
  return function (...args) {
    if (args in data) {
      return data[args];
    }
    const result = fn(...args);
    data[args] = result;
    return result;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

console.log(memoizedFn(2, 3), memoize(2, 3), callCount);
