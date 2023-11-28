/* 
toBe(val) accepts another value and returns true
if the two values === each other. If they are
not equal, it should throw an error "Not Equal".

notToBe(val) accepts another value and returns
true if the two values !== each other. If they 
are equal, it should throw an error "Equal".
*/

let expect = function (val) {
  return {
    toBe: (val2) => {
      if (val !== val2) throw new Error("Not Equal");
      else return true;
    },
    notToBe: (val2) => {
      if (val === val2) throw new Error("Equal");
      else return true;
    },
  };
};

console.log(expect(5).notToBe(5));
console.log(expect(5).notToBe(5));
