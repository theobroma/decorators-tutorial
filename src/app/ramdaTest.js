import * as R from 'ramda';

const person = { name: 'andrew', age: 26 };

const ageLens = R.lensProp('age');

//console.log(R.view(ageLens, person));

const res = R.assoc('c', 3, { a: 1, b: 2, c: 7 }); //=> {a: 1, b: 2, c: 3}

const p = R.path(['a', 'b', 'c', 'd'], {
  a: {
    b: {
      c: { d: 999 }
    }
  }
}); //=> 2

console.log(p);
