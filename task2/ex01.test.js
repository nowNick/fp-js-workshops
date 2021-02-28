const joinWithDash = require("./ex01");

xtest("should make necklaces", () => {
  expect(joinWithDash(["o", "o", "o", "o", "o"])).toBe("o-o-o-o-o");
  expect(joinWithDash.length).toEqual(1);
});
