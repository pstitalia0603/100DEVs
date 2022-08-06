// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console


let favDrink = '   water     '
console.log(favDrink.trim())

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let multWords = 'apple orange banana pear watermelon'

let checkApple = multWords.search('apple')
if (checkApple !== -1){
    console.log('Found')
} else {
    console.log('Not Found')
}




// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors(){
    let result = Math.floor(Math.random()*3);
    if (result  >=2 && result <3 ){
        return('rock');
    } else if (result >=1 && result < 2){
        return('paper');
    } else if (result >= 0 && result <1){
        return ('scissors');
    }
}
console.log(Math.floor(Math.random()*3))
console.log(rockPaperScissors())
console.log('-----')


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


choiceRPS('rock')


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function takeInArr(arr){
    arr.forEach(choice => choiceRPS(choice))
}
console.log('=====')
takeInArr(['rock','paper','scissors'])
