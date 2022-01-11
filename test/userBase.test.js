const UserBase = require('../main/user/userBase')
const User = require('../main/user/user')


const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];

describe('count returns how many users are in array', () => {
 it ('should return number of user', () => {
     userBase = new UserBase(users)
     expect(userBase.count()).toBe(3)
 })
})

describe('getNames gets all names from array', () => {
    it ('should return group of names', () => {
        userBase = new UserBase(users)
        expect(userBase.getNames()).toEqual(['Uma','Josh','Ollie'])
    })
   })

   describe('getIntroductions returns a greeting for names in array', () => {
    it ('should return a group of greetings', () => {
        userBase = new UserBase(users)
        expect(userBase.getIntroductions()).toEqual([
            'Hi, my name is Uma',
            'Hi, my name is Josh',
            'Hi, my name is Ollie'
          ])
    })
   })
   
   
