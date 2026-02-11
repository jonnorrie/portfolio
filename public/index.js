let lists_div = document.querySelector('.lists')

async function loadList() {
  let response = await fetch('https://jnorrie.com/items')
  let items = await response.json();

  items.forEach(item => {
    let li = document.createElement("li")
    let p = document.createElement("p")

    li.appendChild(p)
    p.textContent = `${item.title}`
    lists_div.children[0].children[1].appendChild(li)
  })
}

async function submitNewItem(userinput){
  let response = await fetch('https://jnorrie.com/additem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      newItem: userinput
    })
  })
}

function clearList(){
  lists_div.children[0].children[1].innerHTML = '' // remove all items from the list
}

lists_div.addEventListener('click', async event => {
  let inputText = event.target.parentNode.children[0].value

  if(event.target.id === "postgres_submit_button") {
    event.preventDefault()

    if (inputText.length < 1){
      alert("Your entry must not be empty")
    } else {
      await submitNewItem(inputText) // submit new text
  
      clearList() // clear the list
      loadList() // reload the list
      event.target.parentNode.children[0].value = ""
    }
  } 
  else if (event.target.id === "mongodb_submit_button") {
    event.preventDefault()
  }
})

loadList()