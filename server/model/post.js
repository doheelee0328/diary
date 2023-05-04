const db = require('../database/connect')
class Post {
  constructor({ post_id, title, entry_date, content }) {
    this.id = post_id
    this.title = title
    this.date = entry_date
    this.content = content
  }

  static async getAll() {
    const response = await db.query(
      'SELECT * FROM post ORDER BY entry_date DESC'
    )
    if (response.rows.length === 0) {
      throw new Error('No diary entries have been made')
    }

    return response.rows.map((p) => new Post(p))
  }

  static async create(data) {
    const { title, entry_date, content } = data
    await db.query(
      'INSERT INTO post (title, entry_date, content) VALUES ($1,$2,$3);',
      [title, entry_date, content]
    )
  }

  static async getById(id) {
    const response = await db.query('SELECT * FROM post WHERE post_id = $1', [
      id,
    ])
    if (response.rows.length != 1) {
      throw new Error('Diary entry does not exist')
    }
    return new Post(response.rows[0])
    // return response
  }
}

module.exports = Post
