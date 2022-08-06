//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('h2').innerText = localStorage.getItem('books')

function getFetch(){
  const ISBN = document.querySelector('input').value
  console.log(ISBN)
  const url = `https://openlibrary.org/isbn/${ISBN}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        //console.log(data.title)
        if (!localStorage.getItem('books')){
          localStorage.setItem('books',data.title)
        } else {
          let books = localStorage.getItem('books') + " ; " + data.title
          localStorage.setItem('books',books)
        }
      //   let books = localStorage.getItem('books') + " ; " + data.title
      //    localStorage.setItem('books',books)
      //  // put title into localStorage
         document.querySelector('h2').innerText = localStorage.getItem('books')
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
