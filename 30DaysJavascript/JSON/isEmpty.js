var isEmpty = function (obj) {
  return Object.keys(obj).length === 0;
};

let object1 = { x: 5, y: 42 };
console.log(isEmpty(object1));

let object2 = {};
console.log(isEmpty(object2));

let object3 = [null, false, 0];
console.log(isEmpty(object3));
