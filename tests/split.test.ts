import { expect } from 'chai';
import { split } from '../src/split';

const testArray = [1, 2, 3, 4, 5],
    testLength = 2,
    testOutput = [[1, 2], [3, 4], [5]];

describe('split', () => {
    it('splits to arrays', () => {
        const result = split(testArray, testLength);
        expect(result).to.be.an('array');
    });

    it('splits [ 1, 2, 3, 4, 5] N=2 to [[1, 2], [3, 4], [5]]', () => {
        const result = split(testArray, testLength);
        expect(result).to.eql(testOutput);
    });

    it('splits [1, 2, 3, 4] N=2 to [[1, 2], [3, 4]]', () => {
        const result = split([1, 2, 3, 4], testLength);
        expect(result).to.eql([
            [1, 2],
            [3, 4],
        ]);
    });

    it('splits [1, 2, 3, 4] N=5 to [[1, 2, 3, 4]]', () => {
        const result = split([1, 2, 3, 4], 5);
        expect(result).to.eql([[1, 2, 3, 4]]);
    });

    it('splits [] N=5 to []', () => {
        const result = split([], 5);
        expect(result).to.eql([]);
    });
});
