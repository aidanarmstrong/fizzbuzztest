const checkFizzBuzz = require("../fizbuzz.function");

test('check correctly adds fizz buzz to number', () => {
    expect(checkFizzBuzz(3)).toBe('Fizz')
    expect(checkFizzBuzz(5)).toBe('Buzz')
    expect(checkFizzBuzz(15)).toBe('FizzBuzz')

    expect(checkFizzBuzz(35)).toBe('Buzz')
    expect(checkFizzBuzz(75)).toBe('FizzBuzz')
    expect(checkFizzBuzz(78)).toBe('Fizz')
})
