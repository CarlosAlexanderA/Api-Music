import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '123123',
  database: 'api_music'
}

const connection = await mysql.createConnection(config)

export class songModel {
  static async getAll () {
    try {
      const [songs] = await connection.query('select * from songs')
      return songs
    } catch (error) {
      throw new Error('songs is failed')
    }
  }

  static async getById ({ id }) {
    const [song] = await connection.query('select * from songs where id = (?)', [id])

    if (song.length === 0) return null

    return song[0]
  }

  static async create ({ input }) {
    const { name, duration, release_date, link } = input
    try {
      await connection.query(`INSERT INTO songs (name, duration, release_date, link) 
      VALUES ( ?, ?, ?, ? );`, [name, duration, release_date, link])
    } catch (error) {
      throw new Error('Error createing song')
    }
    const [songs] = await connection.query('select * from songs')
    return songs
  }

  static async delete ({ id }) {
    let prevSong
    try {
      prevSong = this.getById({ id })
      await connection.query('delete from songs where id = ?', [id])
    } catch (error) {
      throw new Error('Error to deleting song')
    }
    return prevSong
  }

  static async update ({ id, input }) {
    try {
      const fileds = []

      Object.entries(input).forEach(([key, value]) => {
        if (value !== undefined) {
          fileds.push(`${key} = "${value}"`)
        }
      })
      await connection.query('UPDATE songs SET ' + fileds.join(', ') + ' WHERE id = ?', [id])

      const song = await this.getById({ id })
      return song
    } catch (error) {
      throw new Error(' Dont Update')
    }
  }
}
export class genreModel {
  static async getAll () {
    try {
      const [genres] = await connection.query('select * from genres')
      return genres
    } catch (error) {
      throw new Error('songs is failed')
    }
  }

  static async getById ({ id }) {
    const [genre] = await connection.query('select * from genres where id = (?)', [id])

    if (genre.length === 0) return null

    return genre[0]
  }

  static async create ({ input }) {
    const { name } = input
    try {
      await connection.query(`INSERT INTO genres (name) 
      VALUES ( ? );`, [name])
    } catch (error) {
      throw new Error('Error createing song')
    }
    const [genres] = await connection.query('select * from genres')
    return genres
  }

  static async delete ({ id }) {
    let prevSong
    try {
      prevSong = this.getById({ id })
      await connection.query('delete from songs where id = ?', [id])
    } catch (error) {
      throw new Error('Error to deleting song')
    }
    return prevSong
  }

  static async update ({ id, input }) {
    try {
      const fileds = []

      Object.entries(input).forEach(([key, value]) => {
        if (value !== undefined) {
          fileds.push(`${key} = "${value}"`)
        }
      })
      await connection.query('UPDATE songs SET ' + fileds.join(', ') + ' WHERE id = ?', [id])

      const song = await this.getById({ id })
      return song
    } catch (error) {
      throw new Error(' Dont Update')
    }
  }
}
