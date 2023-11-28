Array.prototype.groupBy = function (fn) {
  const group = {};
  for (const element of this) {
    const key = fn(element);
    if (group[key] == null) group[key] = [];
    group[key].push(element);
  }
  return group;
};

console.log([1, 2, 3].groupBy(String));
