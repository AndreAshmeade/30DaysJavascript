/*
A current value is increase, decrease,by 
functions and tracked by an i variable.
Reset make return a empty variable. 
*/

let createCounter = function (init) {
  let i = 0;
  return {
    increment: () => init + ++i,
    decrement: () => init + --i,
    reset: () => {
      //reinitlize it to zero
      i = 0;
      return init;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
