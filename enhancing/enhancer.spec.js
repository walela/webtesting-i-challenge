const enhancer = require('./enhancer.js')

// TODO - add equality tests?
describe('enhancer methods', () => {
  describe('repair method', () => {
    test('returns a correctly repaired item', () => {
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
  describe('successful enhancement method', () => {
    test('returns an unchanged object given max enhancement', () => {
      const item = { name: 'Mario', durability: 55, enhancement: 20 }
      expect(enhancer.succeed(item)).toEqual(item)
    })
    test('returns correctly enhanced object', () => {
      const expectedOutput = { name: 'Pacman', durability: 25, enhancement: 12 }
      expect(
        enhancer.succeed({ name: 'Pacman', durability: 25, enhancement: 11 })
      ).toEqual(expectedOutput)
    })
  })
})
