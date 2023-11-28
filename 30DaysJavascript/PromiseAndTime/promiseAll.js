/* 
Given an array of asynchronous functions, return 
a new promise. Each function in the array accepts 
no argument and returns a promise.


Promise resolves:
When all the promises returned from functions were
resolved successfully. The resolved value of promise 
should be an array of all the resolved values of promises
in the same order as they were in the functions.


promise rejects:
When any of the promises returned from functions were
rejected. promise should also reject with the reason 
of the first rejection.

*/

let promiseAll = async function (functions) {
  return new Promise((res, rej) => {
    let len = functions.length,
      ct = 0;
    const ans = new Array(len);
    for (let ind = 0; ind < len; ++ind) {
      functions[ind]()
        .then((val) => {
          ans[ind] = val;
          ct++;
          if (ct === len) res(ans);
        })
        .catch((err) => rej(err));
    }
  });
};

const promise = promiseAll([() => new Promise((res) => res(42))]);
promise.then(console.log);
