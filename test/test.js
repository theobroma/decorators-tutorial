import feast from '../src/app/index';
import { assert } from 'chai';

describe('feast', () => {
  it('basic tests', () => {
    assert.equal(feast('great blue heron', 'garlic naan'), true);
    assert.equal(feast('chickadee', 'chocolate cake'), true);
    assert.equal(feast('brown bear', 'bear claw'), false);
  });
});
