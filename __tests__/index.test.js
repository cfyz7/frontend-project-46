import { test, expect } from '@jest/globals';
import { sortArr } from '../sub.js'

test('sort', () => {
    expect(sortArr([1, 0, 5, 6, 4])).toEqual([0, 1, 4, 5, 6]);
    expect(sortArr([])).toEqual([]);
});


