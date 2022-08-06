// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood
favFood = 'pizza'

alert(favFood);


//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let newVar = "What's Up?"
//alert(newVar[1]);
alert(newVar.charAt(1));

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function takeThree(n1,n2,n3){
    alert((n1/n2)*n3)
}

takeThree(4,5,6)


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function takeOne(num){
    // console.log(num**3)
   // console.log(Math.pow(num,3));
    console.log(Math.cbrt(num).toFixed(4))
}

takeOne(9)


// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function takeMonth(month){
    let monthLowerCase = month.toLowerCase();
    if (monthLowerCase === 'june' || monthLowerCase ==='july' || monthLowerCase ==='august'){
        alert('YAY');
    } else {
        alert('Boo')
    }
}

takeMonth('January');
takeMonth('June')
// takeMonth('July')
// takeMonth('December')


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.


function takeNum(num){
    for (let x=1 ;x<=num;x++){
        if (x % 5 !== 0){
            console.log(x);
        }
    }
}

takeNum(50);
takeNum(15);
