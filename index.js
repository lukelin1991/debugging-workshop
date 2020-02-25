document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  // check this later, why is it empty?

  let joke;

  console.log({
    form: form
  })

  function fetchJoke(){
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => joke = jokeData.joke)
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    // check this, what do we need an empty string for?
    const username = document.getElementById('name-input').value
    const jokeList = document.getElementById('joke-list')
    const newJokeLi = document.createElement('li')

    //we need the input where the name's being typed

    if(username === "") return;
    fetchJoke().then(() => {
      newJokeLi.innerHTML = `
      <span class="username">${username} says:</span> ${joke}
      `
      jokeList.appendChild(newJokeLi)
    })
  })
})
