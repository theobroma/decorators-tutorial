// write the function isAnagram
var fn = function(test, original) {
  return (
    original
      .toLowerCase()
      .split('')
      .sort()
      .join('') ===
    test
      .toLowerCase()
      .split('')
      .sort()
      .join('')
  );
};

// const res = isAnagram('foefet', 'toffee');
// console.log(res);
module.exports = fn;
