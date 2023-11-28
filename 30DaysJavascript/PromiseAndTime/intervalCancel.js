//Given a function fn,
//an array of arguments args,
//an interval time t
// return cancel function

// fn() called with args
// called every t milliseconds cancelFn
// cancel at cancelT ms.

var cancellable = function (fn, args, t) {
  fn(...args);
  const time = setInterval(() => fn(...args), t);
  return () => clearInterval(time);
};

const result = [];

const fn = (x) => x * 2;
const args = [4],
  t = 20,
  cancelT = 110;

let log = (...argsArr) => {
  result.push(fn(...argsArr));
};

const cancel = cancellable(fn, args, t);

setTimeout(() => {
  cancel();
  console.log(result);
}, cancelT);
