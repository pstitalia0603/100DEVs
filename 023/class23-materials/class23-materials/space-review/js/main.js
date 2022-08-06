//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let arrNums2=[45,66,78,232,45,3,88,7]
// let sum = 0
// arrNums2.forEach( x => sum+=x )
// alert(sum)

alert( arrNums2.reduce( (acc,c) => acc + c, 0 ))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function arrNums(arr){
    // arr.forEach( x => Math.pow(x,2))
    let newArrNums = arr.map(x=>Math.pow(x,2))
    return newArrNums
}

console.log(arrNums([4,5,6,7,3,22]))

//Create a function that takes string
//Print the reverse of that string to the console

function revStr(str) {
    let strSplit = str.split("")
    let strRev = strSplit.reverse()
    let strReverse = strRev.join("")
    return strReverse
}

console.log(revStr('SuperCalafragalistic'))

//Create a function that takes in a string
//Alert if the string is a palindrome or not


function palendrome(str){
    let checkRev = revStr(str.toLowerCase())
    if (checkRev === str.toLowerCase()){
        alert('Yep, palendrome')
    } else {
        alert('Nope, not palendrome')
    }
}


palendrome('Good DooG')
palendrome('Supercalafragalistic')

const palindromeCheck = str => alert (str === str.split('').reverse().join(''))

palindromeCheck('good dog')
palindromeCheck('racecar')
