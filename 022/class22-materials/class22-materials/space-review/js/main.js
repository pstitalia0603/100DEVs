//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let sumArray=[67,87,54,34,5,4,33,2]
//let sum=0
//running total
//sumArray.forEach((x,i) => console.log(sum+=x))

let sum2 = sumArray.reduce( (acc,c) => acc+c,0 )

console.log(sum2)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function takeArrNums(arrNums){
    let newArrNums = arrNums.map(x=>Math.pow(x,2))
    return newArrNums
}


console.log(takeArrNums([5,6,33,43,22,3445,45,4,338,8,97,7]))


//Create a function that takes string
//Print the reverse of that string to the console

function takeAString(str){
    let revStr = str.split("");
    let revArray = revStr.reverse();
    let joinArray = revArray.join("");
    return joinArray;
}

console.log(takeAString("What's Up? Yo?"))


//Create a function that takes in a string
//Alert if the string is a palindrome or not

function isThisPalen(str){
    let splitStr=str.split("");
    let revStr = splitStr.reverse();
    let backStr = revStr.join("");
     if (str === backStr){
        return ('This is a palendrome')
    } else {
        return ('This is not a palendrome')
    }
}

console.log(isThisPalen('Good dooG'))
console.log(isThisPalen('This is not a palendrome'))

//console.log('Good doog'.reverse())
