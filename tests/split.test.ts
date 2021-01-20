import { expect } from 'chai';
import { split } from "../src/split";

const
    testArray = [1, 2, 3, 4, 5],
    testLength = 2,
    testOutput = [
        [1, 2],
        [3, 4],
        [5]
    ];

describe('split', () => {
    it('splits to arrays', () => {
        let result = split(testArray, testLength);
        expect(result).to.eql(testOutput);
    });
});