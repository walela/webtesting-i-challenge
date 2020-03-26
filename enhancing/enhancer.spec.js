const enhancer = require('./enhancer.js')

describe('enhancer methods', () => {
  describe('repair method', () => {
    test('returns the correct repaired item', () => {
      const expectedOuput = {
        name: 'Lara Croft',
        durability: 100,
        enhancement: 10
      }
      expect(
        enhancer.repair({ name: 'Lara Croft', durability: 75, enhancement: 10 })
      ).toEqual(expectedOuput)
    })
  })
})
