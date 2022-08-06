//Write your pseduo code first! 

//listen for button click
document.querySelector('#convert').addEventListener('click', convert)

function convert() {
    //Ask for a temperature value in Celcius
    const temp = document.querySelector('#temp').value;
    //convert temp to farenheit
    let fTemp = (temp*1.8)+32;
    //display conversion result
    document.querySelector('#fTemp').innerText = fTemp;
}