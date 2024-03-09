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
  static async getById ({ id }) {
    const [song] = await connection.query('select * from songs where id = (?)', [id])

    if (song.length === 0) return null

    return song[0]
  }

  static async create ({ input }) {
    const { name, duration, release_date, link } = input
    let result
    try {
      console.log(name)
      result = await connection.query('INSERT INTO songs (name, duration, release_date, link) VALUES ( ? , ?, ?, ? );', [name, duration, release_date, link])
      // id = result.id // Obtener el ID de la fila insertada
      // console.log('ID de la canción insertada:', id)
    } catch (error) {
      throw new Error('Error createing song')
    }
    // const [song] = await connection.query('select * from songs where id = (?)', [id])
    // return song[0]
    return result[0]
  }

  static async delete ({ id }) {

  }

  static async update ({ id, input }) {

  }
}
