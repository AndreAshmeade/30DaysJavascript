var compactObject = function (obj) {
  //check if the input is an object or an array
  if (Array.isArray(obj)) {
    //filter out the falsy values
    return obj
      .filter((value) => Boolean(value))
      .map((value) => compactObject(value));
  } else if (typeof obj === "object" && obj !== null) {
    //Create a new object without the falsy values
    let newObj = {};
    for (let key in obj) {
      if (Boolean(obj[key])) {
        newObj[key] = compactObject(obj[key]);
      }
    }
    return newObj;
  } else {
    // return the values as it is if it's not an object or an array
    return obj;
  }
};

const example1 = [null, 0, false, 1];
console.log(compactObject(example1));

const example2 = { a: null, b: [false, 1] };
console.log(compactObject(example2));

const example3 = [null, 0, 5, [false, 16]];
console.log(compactObject(example3));

/*
Example 1:
Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array.

Example 2:
Input: obj = {"a": null, "b": [false, 1]}
Output: {"b": [1]}
Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.

Example 3:
Input: obj = [null, 0, 5, [0], [false, 16]]
Output: [5, [], [16]]
Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.
*/
