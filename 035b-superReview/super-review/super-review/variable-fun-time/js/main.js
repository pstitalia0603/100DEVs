//--- Easy
//create a variable and assign it a number
let x = 15


//minus 10 from that number

x -= 10

//print that number to the console

console.log(x)

//--- Medium
//create a variable that holds a value from the input

let y = Number(document.querySelector('#danceDanceRevolution').value)

//add 25 to that number

y += 25 //need to add to click event to catch number from input

//alert that number

alert(y)

//--- Hard
//create a variable that holds the h1

const h1 = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables

h1.addEventListener('click', addTwo)

function addTwo(){
    let y = Number(document.querySelector('#danceDanceRevolution').value)
    y +=25
    console.log(x + y)
}

addTwo()
