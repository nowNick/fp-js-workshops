const hospitablePlanets = require("./ex03");
const SolarSystem = require("./solar-system");

xtest("hospitablePlanets", () => {
  expect(hospitablePlanets(SolarSystem)).toEqual(["Earth", "Mars"]);
});
