import time from './time';
import memoize from './memoize';

const fns = {
  @time
  suqareAll(arr) {
    return arr.map(item => {
      return item * item;
    });
  },
  @time
  pow(base, exponent) {
    return Math.pow(base, exponent);
  },
  //@time
  @memoize
  fibonacci(n) {
    //0,1,2,3,5,8,13, ...
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }
};

//console.log(fns.suqareAll(Array(100000).fill(4)));
// console.log(fns.pow(2, 8));
// console.log(fns.pow(3, 8));
// console.log(fns.pow(4, 8));
// console.log(fns.pow(5, 8));

// fibonacci0: 7914.9091796875ms
console.log(fns.fibonacci(20));
