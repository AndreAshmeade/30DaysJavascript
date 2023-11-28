const reducer = function (nums, fn, init) {
  let result = init;
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    result = fn(result, item, i);
  }
  return result;
};

// Example 1

let arr = [1, 2, 3, 4];

function sum(accum, curr) {
  return accum + curr;
}

let example1 = reducer(arr, sum, 0);
console.log(example1);

//Example 2

function mutiple(accum, curr) {
  return accum + curr * curr;
}

let example2 = reducer(arr, mutiple, 100);
console.log(example2);

//Eample 3

function zero(accum, curr) {
  return 0;
}

let example3 = reducer(arr, zero, 130);
console.log(example3);
