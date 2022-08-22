//Get a dog photo from the dog.ceo api and place the photo in the DOM

//https://dog.ceo/api/breeds/image/random


// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.message)
//         document.querySelector('img').src = data.message

//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });




const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'


fetch(url)
    .then(res => res.json())
    .then(data => {
       // console.log(data.drinks[0])
       let title = data.drinks[0].strDrink
       let thumb = data.drinks[0].strDrinkThumb
       document.querySelector('h1').innerText = title
       document.querySelector('img').src = thumb
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
