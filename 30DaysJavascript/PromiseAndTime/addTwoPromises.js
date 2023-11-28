var addTwoPromises = async (promise1, promise2) => {
  return Promise.all([promise1, promise2]).then(function (value) {
    return value[0] + value[1];
  });
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log);
