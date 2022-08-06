// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

let senTance = "What in the world is going on?"

// if (senTance.includes('?')){
if (senTance.endsWith('?')){
    alert(senTance)
} else {
    alert('nope')
}


//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let multWords = "multiple worlds jr. dev"
// let multWordsReplace = multWords.replace('jr. dev', 'software engineer')

let multWordsReplace = multWords.replaceAll('jr. dev', 'software engineer')

console.log(multWordsReplace)



// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible


function rockPaperScissors(){
    let result = Math.random()
    if (result <.33) {
        return 'rock'
    } else if (result <.66){
        return 'paper'
    } else {
        return 'scissors'
    }
}

// function rockPaperScissors(){
//     let result = Math.floor(Math.random()*3);
//     if (result  >=2 && result <3 ){
//         return('rock');
//     } else if (result >=1 && result < 2){
//         return('paper');
//     } else if (result >= 0 && result <1){
//         return ('scissors');
//     }
// }

console.log('--------rockPaperScissors----------')
console.log(rockPaperScissors())
console.log(rockPaperScissors())
console.log(rockPaperScissors())
console.log(rockPaperScissors())
console.log(rockPaperScissors())
console.log(rockPaperScissors())



// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function choiceRPS(playerChoice){
    let botChoice = rockPaperScissors();
    if ((playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'paper' && botChoice ==='rock') || (playerChoice === 'scissors' && botChoice === 'paper')){
        console.log('You Win')
    } else if (playerChoice === botChoice){
        console.log('You Tied')
    } else {
        console.log ('You Lose')
    }
}


console.log('-----choiceRPS----------')
choiceRPS('rock')
choiceRPS('paper')
choiceRPS('scissors')
choiceRPS('rock')
choiceRPS('paper')
choiceRPS('scissors')
choiceRPS('rock')
choiceRPS('paper')
choiceRPS('scissors')
choiceRPS('rock')
choiceRPS('paper')
choiceRPS('scissors')



//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGame(arr){
    arr.forEach(x => choiceRPS(x))
}
console.log('-----playGame------------')

playGame(['rock','paper','scissors','rock','scissors','rock','paper','paper'])
