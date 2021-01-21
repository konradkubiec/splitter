# split
Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N equally sized arrays.

Where the size of the original array cannot be divided equally by N, the final part should have a length equal
to the remainder.

```
split([1, 2, 3, 4, 5], 3);
// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
```

## Source code for solution
`src/split.ts` - implemented in TypeScript

## Source code for solution
`tests/split.test.ts` - mocha tests in TypeScript; 

-------------

# Running the solution

## Instalation
`npm i`

## Testing
`npm t`

## Test Coverage
`npm run coverage`

-------------

## Extra: Building npm production-ready modules
If you wish to get JS code from TypeScript one run
this command: `npm run prepublish`

It will generate `lib` directory:
- `split.js` with modern JS code
- `cjs/split.js` with wide support for older JS engines
