var ArrayWrapper = function (nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  var sum = 0;
  for (var i = 0; i < this.nums.length; i++) {
    sum += this.nums[i];
  }
  return sum;
};

ArrayWrapper.prototype.toString = function () {
  var str = "[";
  for (var i = 0; i < this.nums.length; i++) {
    if (i > 0) {
      str += ",";
    }
    str += this.nums[i];
  }
  str += "]";
  return str;
};

/*
Example 1:
Input: nums = [[1,2],[3,4]], operation = "Add"
Output: 10
Explanation:
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
obj1 + obj2; // 10

Example 2:
Input: nums = [[23,98,42,70]], operation = "String"
Output: "[23,98,42,70]"
Explanation:
const obj = new ArrayWrapper([23,98,42,70]);
String(obj); // "[23,98,42,70]"

Example 3:
Input: nums = [[],[]], operation = "Add"
Output: 0
Explanation:
const obj1 = new ArrayWrapper([]);
const obj2 = new ArrayWrapper([]);
obj1 + obj2; // 0
*/

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2);
String(obj1);
String(obj2);
