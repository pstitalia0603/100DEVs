// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favHol = 'Summer'
favHol=favHol.toUpperCase(favHol)

console.log(favHol)




//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let lastThree = 'WhatsaMatter?'

alert(lastThree.slice(-3))



// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function inFive(n1,n2,n3,n4,n5){
    let start=100;
    let end = start-n1-n2-n3-n4-n5;
    alert(Math.abs(end));
}

inFive(5,7,12,34,54)


// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function takeInThree(n1,n2,n3){
    let min = Math.min(n1,n2,n3)
    let max = Math.max(n1,n2,n3)
    console.log(`Min is: ${min}; Max is: ${max}`)
}
takeInThree(-45,657,2)


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

// function headOrTails(){
//     let result=Math.random();
//     if (result <.5){
//         return 'heads'
//     } else {
//         return 'tails'
//     }
// }

const headOrTails = _ => Math.random() <.5 ? 'heads' : 'tails'

//console.log(headOrTails())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function randomHOrT(n){
    for(let i =1;i<= n; i++){
        let result = headOrTails()
        console.log(result)
    }
}

randomHOrT(70)
