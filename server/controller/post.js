const Post = require("../model/post");


async function index (req,res){
    try {
        const entries = await Post.getAll()
        res.status(200).json(entries)
    } catch (error) {
        res.status(500).json({"Error": error.message})
    }
}

async function create (req,res){
    try {
        const data = req.body
        await Post.create(data)
        res.status(201).send("Entry Added")
    } catch (error) {
        res.status(400).json({"error": error.message})
    }
}



module.exports = {
    index,
    create
}
