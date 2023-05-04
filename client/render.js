const writeDate = document.querySelector('.date-picker')
const writeTitle = document.querySelector('.title-container')
const writeContent = document.querySelector('.content-container')

const writeDate2 = document.querySelector('.date-second')
const writeTitle2 = document.querySelector('.title-second')
const writeContent2 = document.querySelector(' .content-second')

async function fetchData() {
  const response = await fetch('http://localhost:3000/entries') // render
  const data = await response.json()
  console.log(data)

  renderData1(data)
  renderData2(data)
}

function renderData1(data) {
  // first post

  const { date, title, content } = data[0]

  const displayDate = document.createElement('p')
  displayDate.textContent = date

  writeDate.appendChild(displayDate)
  const displayTitle = document.createElement('p')

  displayTitle.textContent = title
  writeTitle.appendChild(displayTitle)

  const displayContent = document.createElement('p')
  displayContent.textContent = content
  writeContent.appendChild(displayContent)
}

// second post
function renderData2(data) {
  const { date, title, content } = data[1]

  const displayDate2 = document.createElement('p')
  displayDate2.textContent = date
  writeDate2.appendChild(displayDate2)

  const displayTitle2 = document.createElement('p')
  displayTitle2.textContent = title
  writeTitle2.appendChild(displayTitle2)

  const displayContent2 = document.createElement('p')
  displayContent2.textContent = content
  writeContent2.appendChild(displayContent2)
}
fetchData()
