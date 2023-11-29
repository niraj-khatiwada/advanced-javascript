import { toUppercase, getPerson, getPersonList } from '../app/utils'

describe('utils test suite', function () {
  it('should return uppercase', function () {
    const sut = toUppercase
    const exact = 'NIRAJ'
    const actual = sut('Niraj')
    expect(actual).toBe(exact) // .toBe for primitive types
  })

  it('should return a person', function () {
    const sut = getPerson
    const exact = { name: 'Niraj' }
    const actual = sut()
    expect(actual).toEqual(exact) // .toEqual() for reference type
  })

  it('should return a person list', function () {
    const sut = getPersonList
    const exact = [{ name: 'Niraj' }, { name: 'Suraj' }]
    const actual = sut()
    expect(actual).toEqual(exact) // Exact order of array
    expect(actual).not.toEqual([{ name: 'Suraj' }, { name: 'Niraj' }])
    expect(actual).toEqual(
      expect.arrayContaining([{ name: 'Suraj' }, { name: 'Niraj' }])
    ) // If we don't care about the orders

    expect(actual).toBeDefined()
    expect(actual).not.toBeUndefined() // This one and the above one is same
  })
})
