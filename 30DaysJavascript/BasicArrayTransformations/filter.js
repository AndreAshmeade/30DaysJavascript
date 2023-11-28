/*
Given an integer array arr and a filtering
function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from
the arr for which the expression fn(arr[i], i)
evaluates to a truthy value. A truthy value is a 
value where Boolean(value) returns true
*/

let filters = function (arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) res.push(arr[i]);
  }
  return res;
};

//Example 1

let arr1 = [0, 10, 20, 30];

function greaterThan10(n) {
  return n > 10;
}

const example1 = filters(arr1, greaterThan10);

console.log(example1);

//Example 2

let arr2 = [1, 2, 3];

function firstIndex(n, i) {
  return i === 0;
}
const example2 = filters(arr2, firstIndex);

console.log(example2);

//Example 3

const arr3 = [-2, -1, 0, 1, 2];

function plusOne(n) {
  return n + 1;
}

const example3 = filters(arr3, plusOne);

console.log(example3);
