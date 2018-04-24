import averages from '../src/app/index';
import { assert } from 'chai';

describe('solution', function() {
  it('Basic Tests', function() {
    assert.deepEqual(averages([2, 2, 2, 2, 2]), [2, 2, 2, 2]);
    assert.deepEqual(averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]);
    assert.deepEqual(averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]);
  });
});
