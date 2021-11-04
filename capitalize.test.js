const { setUncaughtExceptionCaptureCallback } = require('process');
const capitalize = require('./capitalize');

test('capitalizes the first letter of the string', () => {
    expect(capitalize("cheese")).toEqual("Cheese");
});