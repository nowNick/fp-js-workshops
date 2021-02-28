// Exercise 2
// ------------------
// Curry add function

const add = (x, y) => x + y; // curry it

const add10 = (y) => add(-10, y);

module.exports = add10;
