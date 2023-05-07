const form = document.querySelector('form')
// const renderEntry = document.querySelector('.post div')

form.addEventListener('submit', submitForm)

async function submitForm(event) {
  event.preventDefault()
  const add = {
    title: event.target.title.value,
    entry_date: event.target.date.value,
    content: event.target.content.value,
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(add),
  }

  const result = await fetch(
    'https://diary-backend-app.onrender.com/entries',
    options
  )
  console.log(result)
  if (result.status === 201) {
    event.target.title.value = ''
    event.target.date.value = ''
    event.target.content.value = ''
    window.location.assign('./render.html')
  }
}
console.log('hello world')
// function renderEntry(data) {
//   const heading = document.createElement('h2')
//   heading.textContent =
// }
