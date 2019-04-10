const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {

  describe('repair()', () => {
    // a repair(item) method that accepts an item object and returns a new item with the durability restored to 100. This method is the simplest of the three and would be a good starting point on this project.
    it('restores durability to 100', () => {
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
      const itemMax = {
        name: "Good Shield",
        durability: 100,
        enhancement: 10
      };
      const expectedMax = {
        name: "Good Shield",
        durability: 100,
        enhancement: 10
      };

      expect(enhancer.repair(item)).toEqual(expected);
      expect(enhancer.repair(itemMax)).toEqual(expectedMax);
    })
  })

  describe('succeed()', () => {
    // a success(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success.
    it('returns item with enhancements', () => {
      const itemMax = {
        name: "Good Shield",
        durability: 98,
        enhancement: 20
      };

      const expectedMax = {
        name: "Good Shield",
        durability: 98,
        enhancement: 20
      };

      const item = {
        name: "Good Shield",
        durability: 98,
        enhancement: 2
      };

      const expected = {
        name: "Good Shield",
        durability: 98,
        enhancement: 3
      };

      const item1 = {
        name: "Good Shield",
        durability: 98,
        enhancement: -2
      };

      const expected1 = {
        name: "Good Shield",
        durability: 98,
        enhancement: 0
      };

      const item2 = {
        name: "Good Shield",
        durability: 98,
        enhancement: 30
      };

      const expected2 = {
        name: "Good Shield",
        durability: 98,
        enhancement: 20
      };

      expect(enhancer.succeed(itemMax)).toEqual(expectedMax)
      expect(enhancer.succeed(item)).toEqual(expected)
      expect(enhancer.succeed(item1)).toEqual(expected1)
      expect(enhancer.succeed(item2)).toEqual(expected2)
    })
  })

  describe('fail()', () => {
    // a fail(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.

    it('subtracts durability depending on enhancement level', () => {

      const itemFail19 = {
        name: "Good Shield",
        durability: 98,
        enhancement: 20
      };

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

      const itemFail1 = {
        name: "Good Shield",
        durability: 0,
        enhancement: 14
      };

      const expectedFail1 = {
        name: "Good Shield",
        durability: 0,
        enhancement: 14
      };

      const itemFail2 = {
        name: "Good Shield",
        durability: 0,
        enhancement: 20
      };

      const expectedFail2 = {
        name: "Good Shield",
        durability: 0,
        enhancement: 19
      };

      const itemFail3 = {
        name: "Good Shield",
        durability: -3,
        enhancement: 20
      };

      const expectedFail3 = {
        name: "Good Shield",
        durability: 0,
        enhancement: 19
      };

      // Assert
      expect(enhancer.fail(itemFail19)).toEqual(expectedFail19);
      expect(enhancer.fail(itemFail15)).toEqual(expectedFail15);
      expect(enhancer.fail(itemFail14)).toEqual(expectedFail14);
      expect(enhancer.fail(itemFail1)).toEqual(expectedFail1);
      expect(enhancer.fail(itemFail2)).toEqual(expectedFail2);
      expect(enhancer.fail(itemFail3)).toEqual(expectedFail3);
    })
  })

  describe('get()', () => {
    // a get() method for use when working on the stretch problem.
    // STRETCH: if the enhancement level is greater than 0, change the name to include the enhancement level, preceded by a plus sign ( + ), between square brackets before the item's name. Example: the name of a "Iron Sword" enhanced to 7 would be "[+7] Iron Sword".

    it('returns item', () => {

      const item = {
        name: "Good Shield",
        durability: 98,
        enhancement: 0
      };
  
      const expected = {
        name: "Good Shield",
        durability: 98,
        enhancement: 0
      };
  
      const item2 = {
        name: "Good Shield",
        durability: 98,
        enhancement: 3
      };
  
      const expected2 = {
        name: "[+3] Good Shield",
        durability: 98,
        enhancement: 3
      };
  
      const item3 = {
        name: "Good Shield",
        durability: 98,
        enhancement: -9
      };
  
      const expected3 = {
        name: "Good Shield",
        durability: 98,
        enhancement: 0
      };

      expect(enhancer.get(item)).toEqual(expected);
      expect(enhancer.get(item2)).toEqual(expected2);
      expect(enhancer.get(item3)).toEqual(expected3);
    })
  })
})