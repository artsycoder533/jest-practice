const caesar = require('./caesar');

//test for text wrapping z to a
test("zebra with key 2 should equal afcsb", () => {
    expect(caesar("zebra", 2)).toEqual("bgdtc");
});
//test for keeping the same case
test("Natasha with key 1 should equal Obubtib", () => {
    expect(caesar("Natasha", 1)).toEqual("Obubtib");
})
//test for punctuation
test("abc. shifted by key 2 should equal, cdg.", () => {
    expect(caesar("abc.", 2)).toEqual("cde.");
});
// test for literal shift based on key
test("man shifted by key 2 is equal to nbo", () => {
    expect(caesar("man", 2)).toBe("ocp");
});