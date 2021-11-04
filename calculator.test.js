const calculator = require("./calculator");

test('adds 1 + 2 to get 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});
test('adds 1 + -3 to get -2', () => {
    expect(calculator.add(1, -3)).toBe(-2);
});
test('subtracts 5 - 2 to get 3', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
});
test('subtracts 2 - -5 to get 7', () => {
    expect(calculator.subtract(2, -5)).toBe(7);
});
test('multiplies 9 * 7 to get 63', () => {
    expect(calculator.multiply(9, 7)).toBe(63);
});
test('divides 100 by 10 to get 10', () => {
    expect(calculator.divide(100, 10)).toBe(10);
});
test('should throw an error if divide by zero', () => {
    expect(() => {
        calculator.divide(6, 0);
    }).toThrow("cannot divide by 0");
});
