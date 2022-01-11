const add = require('../searchCandies/searchCandies')


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

describe ('partial string returns full possible string', () => {
    it('returns full possible string',() => {
      expect(add(candies,2,'Ri')).toEqual([{ name: 'Ricola', price: 1.99 }]);
    });
});

describe('search Engine returns possible candies', () => {
    it('returns array of possible candies', () => {
      expect(add(candies,2,'Ma')).toEqual([{ name: 'Mars', price: 1.49 }]);
    })
})


