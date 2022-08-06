// *Variables*
// Declare a variable, assign it a value, and alert the value

let neVa='20/20'
alert("This is neVa: " + neVa);


// Create a variable, divide it by 10, and console log the value

let vaVaVa = 20;
vaVaVa +=10
console.log("This is vaVaVa: " + Number(vaVaVa));


// *Functions*
// Create a function that multiplys 3 numbers and alerts the product

function multThree(n1,n2,n3){
    alert("This is multThree: " + Number(n1*n2*n3));
}

multThree(3,4,5);

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

function fourNums(n1,n2,n3,n4){
    return (n1+n2)-n3-n4;
}
console.log("This is fourNums:" + Number(fourNums(3,4,5,6)));

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

function threeNum(n1,n2,n3){
   ans = ((100+n1)-n2)/n3;
   if (ans > 25){
    console.log("GREATER THAN 25: WE HAVE A WINNA")
   } else {
    console.log("NOPE")
   }
}

threeNum(600,90,21)



// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

function dayOfWeek(dow){
    if (dow.toLowerCase() ==='saturday' || dow.toLowerCase() ==='sunday') {
        alert('Weekend')
    } else if (dow.toLowerCase() === 'monday' || dow.toLowerCase() === 'tuesday' || dow.toLowerCase() === 'wednesday' || dow.toLowerCase() === 'thursday' || dow.toLowerCase()==='friday' ) {
        alert('Week day')
    } else {
        alert('Try again')
    }
}

dayOfWeek('Tuesday');
dayOfWeek('Sunday');
dayOfWeek('whathwat')



//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function aNum(num){
    for (i=0;i<=num;i+=3){
        console.log(i)
    }
}

aNum(65)