const form = document.querySelector('form')
const renderEntry = document.querySelector('.post div')
form.addEventListener('submit', submitForm)

async function submitForm() {
  e.preventDefault()
  const add = {
    title: e.target.title.value,
    date: e.target.start.value,
    content: e.target.content.value,
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(add),
  }

  const result = await fetch('http://localhost:3000/entries', options)
  if (result === 201) {
    e.target.value.title = ''
    e.target.start.value = ''
    e.target.content.value = ''
    window.assign.location('./render.html')
  }
}

// function renderEntry(data) {
//   const heading = document.createElement('h2')
//   heading.textContent =
// }
