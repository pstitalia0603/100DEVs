//--- Easy
//create a variable and assign it a number
let myVar = 25

//minus 10 from that number
myVar -=10

//print that number to the console
console.log(myVar)

//--- Medium
//create a variable that holds a value from the input

let newVar = document.querySelector('#danceDanceRevolution').value;

//add 25 to that number

newVar+=25

//alert that number

alert("This is newVar: " + Number(newVar))

//--- Hard
//create a variable that holds the h1

const getH1 = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables

getH1.addEventListener('click',addTwoNums)

function addTwoNums(){
    console.log(Number(myVar) + Number(newVar))
}
