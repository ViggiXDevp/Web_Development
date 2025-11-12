/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

function getRandomAdjective() {
  let rand = Math.random();
  if (rand < 1/3) return "Crazy";
  else if (rand < 2/3) return "Amazing";
  else return "Fire";
}

function getRandomShopName() {
  let rand = Math.random();
  if (rand < 1/3) return "Engine";
  else if (rand < 2/3) return "Foods";
  else return "Garments";
}

function getRandomExtra() {
  let rand = Math.random();
  if (rand < 1/3) return "Bros";
  else if (rand < 2/3) return "Limited";
  else return "Hub";
}

function generateBusinessName() {
  return getRandomAdjective() + " " + getRandomShopName() + " " + getRandomExtra();
}

console.log("Your generated business name is: ", generateBusinessName());