import time from './time';

const averages = numbers => {
  const arr = numbers || [];
  const res = arr.map(function(n, i) {
    return (arr[i] + arr[i + 1]) / 2;
  });
  res.pop();
  return res;
};

const res = averages([1, 3, 5, 1, -10]);
console.log(res);
export default averages;
