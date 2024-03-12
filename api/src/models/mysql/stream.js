import { connection } from './index.js'

export class streamModel {
  static async getById ({ id }) {
    const [song] = await connection.query('select link from songs where id = (?)', [id])

    if (song.length === 0) return null

    return song[0].link
  }
}
