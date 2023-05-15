const Post = require('../model/post')

async function index(req, res) {
  try {
    const entries = await Post.getAll()
    res.status(200).send(entries)
  } catch (error) {
    res.status(400).json({ Error: error.message })
  }
}

async function create(req, res) {
  try {
    const data = req.body
    const addData = await Post.create(data)
    res.status(201).json('entry added')
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

async function getIndexID(req, res) {
  try {
    const chosen_id = parseInt(req.params.id)
    const entry = await Post.getById(chosen_id)
    res.status(200).json(entry)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

async function update(req, res) {
  try {
    const chosen_id = parseInt(req.params.id)
    const data = req.body
    const entry = await Post.getById(chosen_id)
    const updateEntry = await entry.update(data)
    res.status(200).json(updateEntry)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

async function destroy(req, res) {
  try {
    const chosen_id = parseInt(req.params.id)
    const entry = await Post.getById(chosen_id)
    await entry.destroy()
    res.status(204).json()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  index,
  create,
  getIndexID,
  destroy,
  update,
}
