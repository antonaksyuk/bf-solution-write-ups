# Add up the Numbers from a Single Number

Create a function that takes a number as an argument. Add up all the numbers
from 1 to the number which passed to the function. For example, if the input is
4 then function should return 10 because 1 + 2 + 3 + 4 = 10.

## Syntax

> addUp(`number`) -> `number`

### Parameters

**number**: `number`

- A number is a single number.

### Return Value: `number`

A sum of all numbers which is precede the parameter number.

## Test Cases

```js
describe('Basic tests', () => {
  it('should return 10 when we pass 4', () => {
    expect(addUp(4)).toEqual(10);
  });
  it('should return 91 when we pass 13', () => {
    expect(addUp(13)).toEqual(91);
  });
  it('should return 180300 when we pass 600', () => {
    expect(addUp(600)).toEqual(180300);
  });
  it('should return 1 when we pass 1', () => {
    expect(addUp(1)).toEqual(1);
  });
  it('should return 20100 when we pass 200', () => {
    expect(addUp(200)).toEqual(20100);
  });
  it('should return 80200 when we pass 400', () => {
    expect(addUp(400)).toEqual(80200);
  });
  it('should return 320400 when we pass 800', () => {
    expect(addUp(800)).toEqual(320400);
  });
  it('should return 500500 when we pass 1000', () => {
    expect(addUp(1000)).toEqual(500500);
  });
});
```
