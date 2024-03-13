import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '123123',
  database: 'api_music'
}

export const connection = await mysql.createConnection(config)

export class BaseModel {
  constructor (tablename) {
    this.tablename = tablename
  }

  async getAll () {
    try {
      const [items] = await connection.query('select * from ' + this.tablename)
      return items
    } catch (error) {
      console.log(error)
      throw new Error('table ? is not found')
    }
  }

  async getById ({ id }) {
    const [item] = await connection.query('select * from ' + this.tablename + ' where id = (?)', [id])

    if (item.length === 0) return null

    return item[0]
  }

  async create ({ input }) {
    const keys = Object.keys(input)
    const values = Object.values(input)
    try {
      await connection.query('INSERT INTO ' + this.tablename + ' (' + keys.join(', ') + ') VALUES ( ' + values.map(item => Number.isInteger(item) ? item : `'${item}'`) + ' );')
    } catch (error) {
      console.log(error)
      throw new Error('error creating element form talbe ' + this.tablename)
    }
    const items = await this.getAll()
    return items
  }

  async delete ({ id }) {
    let prevItem
    try {
      prevItem = await this.getById({ id })
      await connection.query('delete from ' + this.tablename + ' where id = ?', [id])
    } catch (error) {
      console.log(error)
      throw new Error('Error to deleting item: \n' + prevItem)
    }
    return prevItem
  }

  async update ({ id, input }) {
    try {
      const fileds = []

      Object.entries(input).forEach(([key, value]) => {
        if (value !== undefined) {
          fileds.push(`${key} = "${value}"`)
        }
      })
      await connection.query('UPDATE ' + this.tablename + ' SET ' + fileds.join(', ') + ' WHERE id = ?', [id])

      const item = await this.getById({ id })
      return item
    } catch (error) {
      console.log(error)
      throw new Error('dont update item form table ' + this.tablename)
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
