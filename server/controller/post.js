const Post = require("../model/post");


async function index (req,res){
    try {
        const entries = await Post.getAll()
        res.status(200).json(entries)
    } catch (error) {
        res.status(500).json({"Error": error.message})
    }
}



module.exports = {
    index
}
