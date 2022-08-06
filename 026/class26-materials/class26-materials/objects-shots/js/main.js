//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// name: strDrink
//photo: strImageSource
//thumbnail: strDrinkThumb
//instructions: strInstructions

document.querySelector('button').addEventListener('click',getDrink)

function getDrink(){
    let drink = document.querySelector('input').value


const url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`

fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data.drinks)
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerHTML = data.drinks[0].strInstructions

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
