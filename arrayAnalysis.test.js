//Write a function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

const arrayAnalysis = require("./arrayAnalysis");

test("returns and empty object if the array is empty", () => {
    expect(arrayAnalysis([])).toEqual({});
});
test("array of 5 numbers returns length of 7", () => {
    expect(arrayAnalysis([4, 12, 6, 9, 2])).toEqual({average: 6.6, min: 2, max: 12, length: 5});
});
test("length of array [5,1,4,3] should be 4", () => {
    expect(arrayAnalysis([5, 1, 4, 3]).length).toEqual(4);
});
test("average of array [5,1,4,3] should be 3.25", () => {
	expect(arrayAnalysis([5, 1, 4, 3]).average).toEqual(3.25);
});
test("min of array [5,1,4,3] should be 1", () => {
	expect(arrayAnalysis([5, 1, 4, 3]).min).toEqual(1);
});
test("max of array [5,1,4,3] should be 5", () => {
	expect(arrayAnalysis([5, 1, 4, 3]).max).toEqual(5);
});