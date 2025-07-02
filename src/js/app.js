export function heroesInformation(heroes) {
  return [...heroes].sort((a,b) => b.health - a.health);
}