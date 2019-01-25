// CARD DECK Lesson 02 Assignment 5 - Bonus

// Used arrays again to solve the problem, seems the shortest way to do it.

// VARIABLES USING ARRAYS
let suit = ['of hearts','of diamonds','of spades','of clubs']
let number = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King']

// LOOP
for (let i = 0; i < 4; i++){
  for (let j = 0; j < 13; j++){
  console.log(`${number[j]} ${suit[i]}`);
  }
}
