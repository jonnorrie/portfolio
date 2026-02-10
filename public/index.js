let lists_div = document.querySelector('.lists')

async function loadList() {
  let response = await fetch('http://localhost:3000/items')
  let items = await response.json();

  items.forEach(item => {
    let li = document.createElement("li")
    let p = document.createElement("p")

    li.appendChild(p)
    p.textContent = `${item.name}`
    lists_div.children[0].children[1].appendChild(li)
    //console.log(item.name)
  })

  //console.log(items[0].name)
}

loadList()

lists_div.addEventListener('click', event => {

  if (event.target.tagName === 'INPUT') {
    event.preventDefault()

    // make request to local postgres database for all items
    //getFromPostgres()

    // populate the list with retrieved items
    //loadList()

    console.log(`${event.target.parentNode.parentNode.id} submit button clicked`)
  }
})