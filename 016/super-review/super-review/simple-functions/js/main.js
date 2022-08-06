//---Easy
//create a function that subtracts two numbers and alerts the difference

function subNums(num1,num2){
    let ans=num1-num2;
    alert(ans);
}

console.log(subNums(45,32));

//create a function that divides three numbers and console logs the quotient

function divThree(num1,num2,num3){
    let ans2=num1/num2/num3;
    console.log(ans2);
}

divThree(30,4,2);

//create a function that multiplys three numbers and returns the product

function multThree(num1,num2,num3){
    let ans3=num1*num2*num3;
    return ans3;
}

console.log(multThree(4,5,2));

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function manyStuff(num1,num2,num3){
    let ans4=(num1+num2)%num3;
    return ans4;

}
console.log(manyStuff(3,4,6));

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function fourNums(num1,num2, num3, num4){
    let ans5=(num1*num2);
    if (ans5 > 100){
        console.log("it's over 100: " +Number(num3+num4));
    } else if (ans5 < 100) {
        console.log("it's less than 100:" + Number(num3-num4));
    } else if (ans5 === 100) {
        console.log("it's exactly 100:" + Number((num1*num2*num3)%num4));
    }
}

fourNums(10,10,99,1);
