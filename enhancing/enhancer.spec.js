const enhancer = require('./enhancer.js');
// test away!

const item = {
  name: "Good Shield",
  durability: 98,
  enhancement: 10
};
const expected = {
  name: "Good Shield",
  durability: 100,
  enhancement: 10
};
const expectedSuccess = {
  name: "Good Shield",
  durability: 100,
  enhancement: 11
};

describe('enhancer.js', () => {

  describe('repair()', () => {
    // a repair(item) method that accepts an item object and returns a new item with the durability restored to 100. This method is the simplest of the three and would be a good starting point on this project.
    it('restores durability to 100', () => {
      expect(enhancer.repair(item)).toEqual(expected);
    })
  })


  describe('succeed()', () => {
    // a success(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success.
    it('returns item with enhancements', () => {
      const itemSuc = {
        name: "Good Shield",
        durability: 98,
        enhancement: 20
      };

      const expectedSuc = {
        name: "Good Shield",
        durability: 98,
        enhancement: 20
      };

      expect(enhancer.succeed(itemSuc)).toEqual(expectedSuc)
    })

  })
  describe('fail()', () => {
    // a fail(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.


    it('subtracts durability depending on enhancement level', () => {

      // Arrange
      const itemFail19 = {
        name: "Good Shield",
        durability: 98,
        enhancement: 20
      };

      // Act 
      const expectedFail19 = {
        name: "Good Shield",
        durability: 88,
        enhancement: 19
      };

      const itemFail15 = {
        name: "Good Shield",
        durability: 98,
        enhancement: 15
      };

      const expectedFail15 = {
        name: "Good Shield",
        durability: 88,
        enhancement: 15
      };
      const itemFail14 = {
        name: "Good Shield",
        durability: 98,
        enhancement: 14
      };

      const expectedFail14 = {
        name: "Good Shield",
        durability: 93,
        enhancement: 14
      };

      // Assert
      expect(enhancer.fail(itemFail19)).toEqual(expectedFail19);
      expect(enhancer.fail(itemFail15)).toEqual(expectedFail15);
      expect(enhancer.fail(itemFail14)).toEqual(expectedFail14);
    })


  })

  describe('get()', () => {
    // a get() method for use when working on the stretch problem.


    it('returns item', () => {
      expect(enhancer.get(item)).toEqual(item);
    })

  })
})