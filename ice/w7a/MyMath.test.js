import { Sum, AddList, DivideBy} from './MyMath.js'


describe("Sum", () => {
  test('Whether undefined is returned on invaild type', () => {
  expect(Sum(1, "Test")).toBeUndefined()
  })
  
  test('adds 1 + 2 to equal 3', () => {
    expect(Sum(1, 2)).toBe(3)
  })

  it('produces the sum of 10 + 20, which should be 30', () => {
    expect(Sum(10, 20)).toBe(30)
  })
})

// ICE 
describe("AddList", () => {
  test('Adds a list of numbers together', () => {
    let input = [1,3,4,5];
    let result = 13;
    expect(AddList(input)).toBe(result);
    input = [15, 5, 8, -10];
    result = 18;
    expect(AddList(input)).toBe(result);
  })
  test('Tests if empty array returns undefined', () => {
    let input = [];
    expect(AddList(input)).toBeUndefined();
  })
  test('Tests if undefined element returns undefined', () => {
    let input = [undefined, 0, 2, 3];
    expect(AddList(input)).toBeUndefined();
  })
  test('Tests if non-array returns undefined', () => {
    let input = 100;
    expect(AddList(input)).toBeUndefined();
  })
  test('Adds a list of numbers together', () => {
    let numElem = 1000;
    let input = [];
    let result = 0;
    let elem = 0;
    for(var j=0; j < 10; j++) {
      for(var i=0; i < numElem; i++) {
        elem = Math.random()*1000;
        result += elem;
        input.push(elem)
      }
      expect(AddList(input)).toBe(result);
    }
  })

})

/*describe("DivideBy", () => {
  test('Whether undefined is returned on invaild type', () => {
    expect(DivideBy(1, "Test")).toBeUndefined()
  })
}) */


// Examples for Null
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Examples for zero
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})
