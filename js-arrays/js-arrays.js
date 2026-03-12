const heroes = ["Spider-Man", "Captain America", "Iron Man", "The Hulk", "Thor"];

// heroes[1] = "Black Panther";

// heroes[3] = "Doctor Strange";
const backupHero = heroes.at(-1);

heroes[0] = "Wolverine";
heroes[1] = "Colossus";
heroes[2] = "Jean Grey";
heroes[3] = "Deadpool";
heroes[4] = "Gambit";


console.log(heroes[0]);
console.log(heroes[2]);
console.log(heroes.at(-1));

console.log(`The leader of the team is now ${heroes[3]}.`);
console.log(`The full array is: ${heroes}.`);

console.log(`The lead superhero is ${heroes[3]} and my backup is ${heroes.at(-3)}.`);

console.log(`${heroes[3]} and ${heroes[4]} will lead ${heroes[0]}, ${heroes[1]}, and ${heroes[2]} into battle.`)