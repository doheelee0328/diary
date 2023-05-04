const express = require('express')
const cors = require('cors')
const postRouter = require('./router/post')

const app = express()
app.use(cors())
app.use(express.json())

app.use("/entries", postRouter)

app.get('/', (req, res) => {
  res.json('Welcome to the Diary API :)')
})

module.exports = app
