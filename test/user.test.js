const User = require('../main/user/user')

describe('getName returns the name of the user', () => {
 it ('should return name of the user', () => {
     const user = new User('Michael')
     expect(user.getName()).toBe('Michael')
 })
})

describe('getIntroduction introduces the user', () => {
    it ('should return Hi my name is username', () => {
        const user = new User('Michael')
        expect(user.getIntroduction()).toBe('Hi, my name is Michael')
    })
   })

