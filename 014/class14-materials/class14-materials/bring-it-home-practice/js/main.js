// *Variables*
// Create a variable and console log the value
let varMyTest = 45;

console.log('varMyTest: ' + varMyTest);

// Create a variable, add 10 to it, and alert the value

let myNewVar = 305;
myNewVar += 10;
alert("myNewVar: " + myNewVar)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFour(num1,num2,num3,num4){
    let ans2 = num1 - num2 - num3 - num4;
    alert (ans2);
    return ans2;
}
subFour(1,2,3,4)
console.log("subFour: " + subFour(1,2,3,4))

// Create a function that divides one number by another and returns the remainder

function modNums(num1,num2){
    ans=num1%num2;
    return ans;
}
modNums(2,4)
console.log("modNums:" + modNums(2,4))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwo(num1,num2){
    let sum=num1+num2;
    if (sum > 50) {
        alert('Jumanji')
    } else {
        alert('No prob')
    }
}
console.log("addTwo: 4,67 " + addTwo(4,67))
console.log("addTwo: 5,6 " + addTwo(5,6))

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multThree(num1,num2,num3) {
    let prod = num1*num2*num3;
    if (prod % 3 === 0) {
        alert('ZEBRA')
    } else {
        alert('what, what')
    }
}

console.log('MULTTHREE: 2,1,1' + multThree(2,1,1))
console.log('multThree: 1,2,3' + multThree(1,2,3))

