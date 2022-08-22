// *Variables*
// Create a variable and console log the value

let myVar = "Yo"
console.log(myVar)

// Create a variable, add 10 to it, and alert the value

let thisVar = 23
thisVar +=10
alert(thisVar)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFour(n1,n2,n3,n4){
    let diff=n1-n2-n3-n4
    alert(diff)
}

subFour(5,6,2,90)

// Create a function that divides one number by another and returns the remainder

function divNum(n1,n2){
    let quot = n1 % n2
    return quot
}

console.log(divNum(4,65))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwo(n1,n2){
    let sum=n1+n2
    if (sum > 50){
        alert("jumanji")
    } else {
        alert("nope")
    }
}

addTwo(5,80)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multThree(n1,n2,n3){
    let prod = n1 * n2 * n3
    if (prod % 3 === 0){
        alert("ZEBRA")
    } else {
        alert("no way")
    }
}

multThree(5,6,2)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function takeWordNum(word,num){
    for (let x=1;x<=num;x++){
        console.log(word)
    }
}

takeWordNum('yep',15)
