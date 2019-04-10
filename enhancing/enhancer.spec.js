const enhancer = require('./enhancer.js');
// test away!

const item = {
  name: "Good Shield",
  durability: 98,
  displayName: "[+3] Good Shield"
};

const expected = {
  name: "Good Shield",
  durability: 100,
  displayName: "[+3] Good Shield"
};

describe('enhancer.js', () => {

  describe('repair()', () => {
    // a repair(item) method that accepts an item object and returns a new item with the durability restored to 100. This method is the simplest of the three and would be a good starting point on this project.
    it('restores durability to 100', () => {
      expect(enhancer.repair(item)).toEqual(expected);
    })
  })



  describe('success()', () => {
    // a success(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success.

  })
  describe('fail()', () => {
    // a fail(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.
  })

  describe('get()', () => {
    // a get() method for use when working on the stretch problem.


    it('returns item', () => {
      expect(enhancer.get(item)).toEqual(item);
    })

  })
})