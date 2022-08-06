//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


document.querySelector('button').addEventListener('click',getDate)

function getDate(){
    let date = document.querySelector('input').value


    const url=`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`

fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      //  console.log(data.title)
      if (data.media_type === 'image'){
        document.querySelector('img').src = data.hdurl
      } else if (data.media_type === 'video'){
        document.querySelector('iframe').src = data.url
      }
       document.querySelector('h2').innerText = data.title
       document.querySelector('h3').innerHTML = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
