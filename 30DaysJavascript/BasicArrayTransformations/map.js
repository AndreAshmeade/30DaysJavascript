//Remake of Array.maps()
let map = function (arr, fn) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i));
  }
  return newArr;
};

const arr1 = [1, 2, 3, 4];

function plusone(n) {
  return n + 1;
}

const newArray = map(arr1, plusone);
console.log(newArray);

const arr2 = [10, 20, 30];

function constant() {
  return 42;
}

const nextArray = map(arr2, constant);
console.log(nextArray);
