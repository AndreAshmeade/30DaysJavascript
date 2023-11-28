const createHelloWorld = function () {
  let data;
  return function (...args) {
    if (data === undefined) {
      data = "Hello World!";
    }
    return data;
  };
};

const Hello = createHelloWorld();
console.log(Hello());
console.log(Hello({}, null, 42));
