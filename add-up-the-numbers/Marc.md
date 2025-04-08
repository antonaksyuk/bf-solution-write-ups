# [Marc](https://edabit.com/user/6QR2QdW689ihtHjan)

```js
function addUp(num) {
  if (num === 1) return 1;
  return num + addUp(num - 1);
}
```

## Strategy

Marc chose the strategy of make use of "if" statement for the calculate of an
arithmetic series.

## Implementation

This implementation is not using any loop. Use recursion to find the last sum.

## Possible Refactors

This strategy could also be implemented with these Implementation ...

- use for loop,
