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
  describe('failed enhancement method', () => {
    const obj1 = { name: 'Scorpion', durability: 98, enhancement: 14 }
    const obj2 = { name: 'Liu Kang', durability: 96, enhancement: 15 }
    const obj3 = { name: 'Sub Zero', durability: 99, enhancement: 20 }

    describe('given an enhancement of less than 15', () => {
      test('returns an item with the correctly adjusted durability', () => {
        expect(enhancer.fail(obj1)).toEqual({
          name: 'Scorpion',
          durability: 93,
          enhancement: 14
        })
      })
    })

    describe('given an enhancement of 15 or more', () => {
      test('returns an item with the correctly adjusted durability', () => {
        expect(enhancer.fail(obj2)).toEqual({
          name: 'Liu Kang',
          durability: 86,
          enhancement: 15
        })
      })

      describe('given an enhancement of more than 16', () => {
        test('returns item with correctly adjusted durability and enhancement', () => {
          expect(enhancer.fail(obj3)).toEqual({
            name: 'Sub Zero',
            durability: 89,
            enhancement: 19
          })
        })
      })
    })
  })
})
