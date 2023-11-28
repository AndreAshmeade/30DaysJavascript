let chunk = function (arr, size) {
  // declaring variable 'chuncked' as an empty array
  let chunked = [];

  //looping through the array unit it has been
  //entirely "manipulated" or split into subarray
  while (arr.length > 0) {
    // taking splice segments completely out of
    // original array pushing these subarrays into
    // "chunked" array
    chunked.push(arr.splice(0, size));
  }
  //returning the new array of subarrays
  return chunked;
};

const example1 = chunk([1, 2, 3, 4, 5], 1);
console.log(example1);

const example2 = chunk([1, 9, 6, 3, 2], 3);
console.log(example2);

const example3 = chunk([8, 5, 3, 2, 6], 6);
console.log(example3);

const example4 = chunk([], 1);
console.log(example1);
