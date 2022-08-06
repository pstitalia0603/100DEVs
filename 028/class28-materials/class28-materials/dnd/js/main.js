//Example fetch using DnD5eAPI - place subclasses in ul

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const spell = document.querySelector('input').value

  const url = `https://www.dnd5eapi.co/api/spells/${spell}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
      // console.log(data.classes[0])
        document.querySelector('h2').innerText = data.name
      //  document.querySelector('h3').innerText = data.classes.name[0]
       // console.log(data.subclasses)

       //CLASSES ARRAY FOREACH
       data.classes.forEach(obj2 => {
        const li2 = document.createElement('li')
        li2.textContent = obj2.name
        document.querySelector('.classes').appendChild(li2)
       })

       //SUBCLASSES ARRAY FOREACH
        data.subclasses.forEach(obj=> {
         // console.log(obj.name)
          //create an li
            const li = document.createElement('li')
          // add text to li
            li.textContent = obj.name
          //append li to ul
            document.querySelector('.subclasses').appendChild(li)
        })


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
