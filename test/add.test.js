
const add = require('../main/add')

describe('add', () => {
    it('add 2 and 3', () => {
        expect(add(2,3)).toBe(5);
    });
});