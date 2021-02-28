const {
  biggestPlanet,
  myWeightInSolarSystem,
  hospitablePlanets,
} = require("./ex01");

const SolarSystem = [
  {
    name: "Mercury",
    diameter: 4880,
    temperature: { min: 80, max: 700 },
    gravity: 3.7,
  },
  {
    name: "Wenus",
    diameter: 12103,
    temperature: { min: 737, max: 737 },
    gravity: 8.87,
  },
  {
    name: "Earth",
    diameter: 12742,
    temperature: { min: 184, max: 330 },
    gravity: 9.8,
  },
  {
    name: "Mars",
    diameter: 6779,
    temperature: { min: 130, max: 308 },
    gravity: 3.7,
  },
  {
    name: "Jupiter",
    diameter: 139822,
    temperature: { min: 165, max: 165 },
    gravity: 24.79,
  },
  {
    name: "Saturn",
    diameter: 116464,
    temperature: { min: 134, max: 134 },
    gravity: 10.44,
  },
  {
    name: "Uranus",
    diameter: 50724,
    temperature: { min: 76, max: 76 },
    gravity: 8.69,
  },
  {
    name: "Neptune",
    diameter: 49244,
    temperature: { min: 72, max: 72 },
    gravity: 11.15,
  },
];

xdescribe("Ramda", () => {
  test("biggestPlanet", () => {
    expect(biggestPlanet(SolarSystem)).toEqual("Jupiter");
  });

  test("myWeightInSolarSystem", () => {
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

  test("hospitablePlanets", () => {
    expect(hospitablePlanets(SolarSystem)).toEqual(["Earth", "Mars"]);
  });
});
