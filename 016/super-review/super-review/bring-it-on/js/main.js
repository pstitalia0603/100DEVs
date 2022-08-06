// *Variables*
// Create a variable and console log the value
let myVar = 'yo'
console.log(myVar)
// Create a variable, add 10 to it, and alert the value
let newVar = 10
newVar+=10
alert(newVar)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFour(n1,n2,n3,n4){
    alert(n1-n2-n3-n4)
}

subFour(4,5,6,7)

// Create a function that divides one number by another and returns the remainder

function divRem(n1,n2){
    return n1%n2
}

divRem(5,32)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwo(n1,n2){
    let sum = n1+n2;
    if (sum >50){
        alert('Jumanji')
    }
}
addTwo(8,9)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multThree(n1,n2,n3){
    let prod= n1*n2*n3;
    if (prod % 3 === 0){
        alert('ZEBRA')
    }
}

multThree(5,6,76)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordNum(word,num){
    for (x=0;x<=num;x++){
        console.log(word)
    }
}
