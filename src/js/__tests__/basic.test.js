import { heroesInformation } from "../app.js";

test("heroes sorting", () => {
  const heroes = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];
  const sortedHeroes = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]

  const result = heroesInformation(heroes);
  expect(result).toEqual(sortedHeroes);
})