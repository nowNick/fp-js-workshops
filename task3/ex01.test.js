const biggestPlanet = require("./ex01");

const SolarSystem = require("./solar-system");

xtest("biggestPlanet", () => {
  expect(biggestPlanet(SolarSystem)).toEqual("Jupiter");
});
