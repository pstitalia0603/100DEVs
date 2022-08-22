//Write your pseduo code first!

document.querySelector('h1').addEventListener('click',cToF)


function cToF(){

    //need value in celcius
    let temp = Number(document.querySelector('input').value)



    //convert c to f

    temp = temp * 1.8+32


    // display value
    document.querySelector('h2').innerText = `Temp is: ${temp}`

}
