// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
 
const simplePointStructure = {
   1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U','V','W', 'X', 'Y', 'Z' ]
};

const vowelConsonantsPoint = {
   1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L','M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z' ],
   3: ['A', 'E', 'I', 'O' , 'U']
};


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
   let score=0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
       if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
         score=score+Number(pointValue);
		 }
   }
	}
   //console.log(letterPoints);
   console.log(`Score for '${word}': `, score);
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!");
   let userWord = input.question("Enter a word to scrabble: ");
   return userWord;
}


//let simpleScorer;
function simpleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
   let score=0;

   for (let i = 0; i < word.length; i++) {
 
      for (const pointValue in simplePointStructure) {
        if (simplePointStructure[pointValue].includes(word[i])) {
          letterPoints += `Points for '${word[i]}': ${pointValue}\n`
          score=score+Number(pointValue);

        }
  
      }
    }
    //console.log(letterPoints);
    console.log(`Score for '${word}' : `, score);
    return letterPoints;
  }


//let vowelBonusScorer;

function vowelBonusScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
   let score=0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in vowelConsonantsPoint) {
 
		 if (vowelConsonantsPoint[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
         score=score+Number(pointValue);
		 }
       
 
	  }
	}
   //console.log(letterPoints);
   console.log(`Score for '${word}':`, score);
	return letterPoints;
 }


let scrabbleScorer;

const scoringAlgorithms = [['simple','description','simpleScorer'],['vowel','description','vowelBonusScorer'], ['old','description','oldcrabbleScorer']];


function scorerPrompt(userInputWord) {
   console.log("Which scoring algorithm would you like to use? \n ");
   console.log("0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter: 0, 1, or 2\n");

   let userInput= input.question("Selected Scoring Algorithm : ");
 if( userInput==0){
   simpleScorer(userInputWord);
}  else if(userInput == 1){
      vowelBonusScorer(userInputWord);
   }else if(userInput == 2){
      oldScrabbleScorer(userInputWord);
   }else{
      console.log("invalid input");
   }
 }




function transform(oldPointStructure) {};

let newPointStructure = {
   a :[1] ,
   b :[3] ,
   c :[3] ,
   d :[2],
   e :[1],
   f :[4],
   g :[2],
   h :[4],
   i :[1],
   J :[8],
   k :[5],
   l :[1],
   m :[3],
   n :[1],
   o :[1],
   p :[3],
   q :[10],
   r :[1],
   s :[1],
   t :[1],
   u :[1],
   v :[4],
   w :[4],
   x :[8],
   y :[4],
   z :[10]
};

function runProgram() {
   let userInputWord = initialPrompt();
   scorerPrompt(userInputWord);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
