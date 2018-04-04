// var assert = require('assert');

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });
var chai = require('chai');
var assert = chai.assert; // Using Assert style
var expect = chai.expect; // Using Expect style
var should = chai.should(); // Using Should style

var fn = require('../src/app/index');

// const res = fn('foefet', 'toffee');
// console.log(res);

describe('test', () => {
  it('test1', () => {
    assert.equal(fn('foefet', 'toffee'), true);
  });
  it('test2', () => {
    assert.equal(fn('Buckethead', 'DeathCubeK'), true);
  });
  it('test3', () => {
    assert.equal(fn('dumble', 'bumble'), false);
  });
});
