//Write your pseduo code first! 
//get temp in celcius

//listen for button click
document.querySelector('#convert').addEventListener('click', convert)

//convert temp to farenheit
//temp = (temp*1.8)+32
convert

function convert() {
    //Ask for a temperature value in Celcius
    const temp = document.querySelector('#temp').value;
    let fTemp = (temp*1.8)+32;
//display temp in farenheit    
    document.querySelector('#fTemp').innerText = fTemp;
}







