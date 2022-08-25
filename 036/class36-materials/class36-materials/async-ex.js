// async function getACuteDogPhoto(){
//     const res = await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await res.json()
//     console.log(data)
// }
// getACuteDogPhoto()


//with try/catch

    async function getACuteDogPhoto(){
        const res = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await res.json()
        console.log(data);
    }

    try {
        getACuteDogPhoto();
      } catch (error) {
        console.error(error);
        }

//getACuteDogPhoto()



//promise version
// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
