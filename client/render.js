const addPosts = document.getElementById('add-posts')

async function fetchData() {
  try {
    const response = await fetch(
      'https://diary-backend-app.onrender.com/entries'
    )
    const data = await response.json()
    renderData(data)
  } catch (error) {
    console.log(error)
  }
}

function renderData(data) {
  data.forEach((post) => {
    const { date, title, content } = post

    // create all the elements
    const postInfo = document.createElement('div')
    const postDate = document.createElement('p')
    const postTitle = document.createElement('p')
    const postContent = document.createElement('p')
    const buttonContainer = document.createElement('div')
    // const editButton = document.createElement('button')
    const deleteButton = document.createElement('button')

    postDate.textContent = `Date: ${date}`
    postTitle.textContent = `Title: ${title}`
    postContent.textContent = content

    // editButton.classList.add('button', 'edit')
    deleteButton.classList.add('button', 'delete')
    deleteButton.setAttribute('data-bs-toggle', 'modal')
    deleteButton.setAttribute('data-bs-target', '#exampleModal')
    deleteButton.setAttribute('type', 'button')

    // editButton.textContent = 'Edit'
    deleteButton.textContent = 'Delete'

    postInfo.appendChild(postDate)
    postInfo.appendChild(postTitle)
    postInfo.appendChild(postContent)
    // buttonContainer.appendChild(editButton)
    buttonContainer.appendChild(deleteButton)

    addPosts.appendChild(postInfo)
    addPosts.appendChild(buttonContainer)
    buttonContainer.classList.add('btn-container')

    // delete
    deleteButton.dataset.id = post.id // Add this line to set the dataset id attribute
    deleteButton.addEventListener('click', () => deleteEntry(post.id))
    //update

    // editButton.addEventListener('click', (event) => {
    //   editButton.dataset.id = post.id
    //   const dateInput = document.createElement('input')
    //   const titleInput = document.createElement('input')
    //   const contentInput = document.createElement('input')

    //   dateInput.value = date
    //   titleInput.value = title
    //   contentInput.value = content

    //   dateInput.type = 'text'
    //   titleInput.type = 'text'
    //   contentInput.type = 'text'

    //   postDate.textContent = 'Date: '
    //   postTitle.textContent = 'Title: '
    //   postContent.textContent = 'Content: '

    //   postDate.appendChild(dateInput)
    //   postTitle.appendChild(titleInput)
    //   postContent.appendChild(contentInput)

    //   const updateButton = document.createElement('button')
    //   updateButton.textContent = 'Update'
    //   updateButton.classList.add('button', 'update')
    //   buttonContainer.appendChild(updateButton)

    //   updateButton.addEventListener('click', async () => {
    //     const newDate = dateInput.value
    //     const newTitle = titleInput.value
    //     const newContent = contentInput.value
    //     const newData = { date: newDate, title: newTitle, content: newContent }

    //     updateEntry(post.id, newData)
    //   })
    // })
  })
}

async function deleteEntry(id) {
  const yesButton = document.querySelector('.yes-button')
  const noButton = document.querySelector('.no-button')

  yesButton.addEventListener('click', async () => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const result = await fetch(
      `https://diary-backend-app.onrender.com/entries/${id}`,
      options
    )
    if (result.status === 204) {
      window.location.reload()
    }
  })

  noButton.addEventListener('click', () => {
    return
  })
}

// async function updateEntry(id, data) {
//   console.log(data)
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   }
//   const result = await fetch(`http://localhost:3000/entries/${id}`, options)
//   if (result.status === 200) {
//     window.location.reload()
//   }
// }

fetchData()
