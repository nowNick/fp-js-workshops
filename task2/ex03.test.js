const curry = require("./ex03");

xtest("should curry stuff", () => {
  const fn = curry((x, y, z, w) => x * y * z * w);
  expect(fn(2)(3)(4)(5)).toEqual(120);
});
