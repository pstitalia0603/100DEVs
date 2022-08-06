//--- Easy
//create a variable and assign it a number
let myNewVar = 26;


//minus 10 from that number

myNewVar = myNewVar - 10


//print that number to the console

console.log(myNewVar)

//--- Medium
//create a variable that holds a value from the input
// let secVar = document.querySelector('#danceDanceRevolution').value


//add 25 to that number

// secVar+=25

//alert that number

// alert(secVar)

//--- Hard
//create a variable that holds the h1

const headVar = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables

headVar .addEventListener('click',sum)

function sum() {
    let secVar = document.querySelector('#danceDanceRevolution').value;
    sum=(myNewVar + Number(secVar));
    document.querySelector('.showMe').innerHTML = sum;
    return sum;
} 



