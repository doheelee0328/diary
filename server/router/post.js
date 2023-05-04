const { Router } = require('express')

const postController = require('../controller/post.js')
const postRouter = Router()

postRouter.get('/', postController.index)
postRouter.get('/:id', postController.getIndexID)
postRouter.post('/', postController.create)
module.exports = postRouter
