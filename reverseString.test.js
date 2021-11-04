
const reverseString = require('./reverseString');

test('the string returned is reversed', () => {
    expect(reverseString("abc")).toEqual("cba");
});

test('the string has spaces', () => {
    expect(reverseString("abc   ")).toEqual("   cba");
});