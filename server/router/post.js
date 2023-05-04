const { Router } = require("express")

const postContoller = require("../controller/post.js")
const postRouter = Router()


postRouter.get("/",postContoller.index)
postRouter.post("/",postContoller.create)
module.exports = postRouter
