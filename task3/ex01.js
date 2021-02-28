/*
  Check out this data structure

const SolarSystem = [
  {
    name: "Mercury",
    diameter: 4880,  <--- in km
    temperature: { min: 80, max: 700 },   <--- in Kelvins
    gravity: 3.7,    <--- m/s^2
  },
  ... (other planets)
];

*/

const R = require("ramda");

// Get biggest planet
// const biggestPlanet = () => {};
const biggestPlanet = R.pipe(
  R.reduce(R.maxBy(R.prop("diameter")), {
    diameter: -Infinity,
  }),
  R.prop("name")
);

// Get my weight on different planets in solar system
// [ { name: 'Mercury', weight: 20} ]
// Note -- Weight is defined as: F = m * g
const myMass = 79.5; // PRE-PANDEMIC!!!
// const myWeightInSolarSystem = () => {};

const weightOnPlanet = (mass) => (planet) => ({
  name: planet.name,
  weight: Math.round(mass * planet.gravity),
});

const myWeightOnPlanet = weightOnPlanet(myMass);
const myWeightInSolarSystem = R.map(myWeightOnPlanet);

// ----------------------------------
// Get a list of planets that have "average" (i.e. (min + max) / 2) temperature within earthly bounds (between Earth's max and min)
// const hospitablePlanets = () => {};

const averagePlanetTemperature = R.pipe(
  R.prop("temperature"),
  R.props(["min", "max"]),
  R.mean
);

const isGreaterThanEarthLowest = R.lte(184);
const isLowerThanEarthHighest = R.gte(330);
const isWithinEarthBounds = R.both(
  isGreaterThanEarthLowest,
  isLowerThanEarthHighest
);
const isHospitable = R.pipe(averagePlanetTemperature, isWithinEarthBounds);
const hospitablePlanets = R.pipe(R.filter(isHospitable), R.pluck("name"));

module.exports = {
  biggestPlanet,
  myWeightInSolarSystem,
  hospitablePlanets,
};
