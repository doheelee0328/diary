const addPosts = document.getElementById('add-posts')

async function fetchData() {
  const response = await fetch('http://localhost:3000/entries')
  const data = await response.json()

  renderData(data)
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
    const editButton = document.createElement('button')
    const deleteButton = document.createElement('button')

    postDate.textContent = `Date: ${date}`
    postTitle.textContent = `Title: ${title}`
    postContent.textContent = content

    editButton.classList.add('button', 'edit')
    deleteButton.classList.add('button', 'delete')

    editButton.textContent = 'Edit'
    deleteButton.textContent = 'Delete'

    postInfo.appendChild(postDate)
    postInfo.appendChild(postTitle)
    postInfo.appendChild(postContent)
    buttonContainer.appendChild(editButton)
    buttonContainer.appendChild(deleteButton)

    addPosts.appendChild(postInfo)
    addPosts.appendChild(buttonContainer)
    buttonContainer.classList.add('btn-container')
  })
}

fetchData()
