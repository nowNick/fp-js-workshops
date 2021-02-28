const SolarSystem = require("./solar-system");
const myWeightInSolarSystem = require("./ex02");

xtest("myWeightInSolarSystem", () => {
  expect(myWeightInSolarSystem(SolarSystem)).toEqual([
    {
      name: "Mercury",
      weight: 294,
    },
    {
      name: "Wenus",
      weight: 705,
    },
    {
      name: "Earth",
      weight: 779,
    },
    {
      name: "Mars",
      weight: 294,
    },
    {
      name: "Jupiter",
      weight: 1971,
    },
    {
      name: "Saturn",
      weight: 830,
    },
    {
      name: "Uranus",
      weight: 691,
    },
    {
      name: "Neptune",
      weight: 886,
    },
  ]);
});
