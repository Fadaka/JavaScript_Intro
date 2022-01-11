const fizzBuzzCalcualtor = require('../main/fizzBuzz')

describe('fizzBuzz',() => {
    it ('returns FizzBizz when a number is divisible by 15', () => {
        expect(fizzBuzzCalcualtor(15)).toBe('FizzBuzz')
    });
});

describe('fizzBuzz',() => {
    it ('returns FizzBizz when a number is divisible by 3', () => {
        expect(fizzBuzzCalcualtor(3)).toBe('Fizz')
    });
});

describe('fizzBuzz',() => {
    it ('returns FizzBizz when a number is divisible by 5', () => {
        expect(fizzBuzzCalcualtor(5)).toBe('Buzz')
    });
});