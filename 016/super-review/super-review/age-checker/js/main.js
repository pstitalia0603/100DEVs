//Create a conditonal that checks their age

//listen for button click
document.querySelector('h1').addEventListener('click', checkAge)
let h1Ans = document.querySelector('p')
function checkAge(){

    const age = document.querySelector('#danceDanceRevolution').value;
    
    if (age <16) {
        h1Ans.innerText = ("You cannot drive");
    } else if (age < 18) {
        h1Ans.innerText = ("You can't hate from outside the club, b/c you can't even get in");
    } else if (age <21){
        h1Ans = ("You can not drink");
    } else if (age <25){
        h1Ans.innerText = ('you can not rent cars affordable');
    } else if (age <30){
        h1Ans.innerText = ('you can not rent fancy cars affordably');
    } else if (age >=30){
        h1Ans.innerText = ("there is nothing left to look forward to");
    }
}


//If under 16, tell them they can not drive

//If under 18, tell them they can't hate from outside the club, because they can't even get in

//If under 21, tell them they can not drink


//If under 25, tell them they can not rent cars affordably

//If under 30, tell them they can not rent fancy cars affordably

//If  over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph


