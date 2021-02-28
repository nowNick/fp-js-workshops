const add10 = require("./ex02");

xtest("should add stuff", () => {
  expect(add10(5)).toEqual(15);
});
