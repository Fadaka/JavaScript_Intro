const { expect } = require('@jest/globals');
const { describe, it } = require('jest-circus');
const searchEngine = require('./searchEngine')

describe ('checks amount given is more than price', () => {
    it('returns candies below input price',() => {
      expect(priceChecker(1.5)).toContain('Mars');
    });
});

describe ('partial string returns full possible string', () => {
    it('returns full possible string',() => {
      expect(stringChecker('Ri')).toContain('Ricola');
    });
});

describe ('partial string returns full possible string', () => {
    it('returns full possible string',() => {
      expect(stringChecker('ri')).toContain('Ricola');
    });
});

describe('search Engine returns possible candies', () => {
    it('returns array of possible candies', () => {
        expect(searchEngine('Ma', 1.5).toContain('Mars'))
    })
})


const candies = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Mars', price: 1.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
  ];