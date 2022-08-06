// *Variables*
// Create a variable and console log the value

let myVar = 21;
console.log(myVar);

// Create a variable, add 10 to it, and alert the value

let anoVar = 31;
anoVar +=10;
alert(anoVar);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFour(n1,n2,n3,n4){
    alert(n1-n2-n3-n4);
}

subFour(3,6,1,2)

// Create a function that divides one number by another and returns the remainder

function divNums(n1,n2){
    return (n1%n2)
}

console.log(divNums(6,7))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwo(n1,n2){
    let sum=n1+n2;
    if (sum > 50){
        alert("Jumanji")
    } else {
        alert("poop")
    }
}

addTwo(5,336)


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multThree(n1,n2,n3){
    prod=n1*n2*n3;
    if (prod % 3 === 0){
        alert("ZEBRA")
    } else {
        alert("WHAT THE WHAT?")
    }
}
multThree(5,6,7)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordNum(word,num){
    for (let i=0;i<=num;i++){
        console.log(word +" ")
    }
}
wordNum('yo',3)
