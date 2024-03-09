import { getRandomNum, readJson } from '../../utils.js'

const songs = readJson('../songs.json')

export class SongModel {
  static async getRandom () {
    const length = songs.length
    return songs[getRandomNum(length)]
  }

  static async getId ({ id }) {
    // const song = songs.filter(item => Object.keys(item).filter(key => key !== 'rute' && key !== 'genre').some(key =>
    //   typeof item[key] === 'string' && item[key].toLowerCase().includes(id.toLowerCase())
    // )
    // )
    const song = songs.find(item => item.id === id)
    if (song) return song
    return undefined
  }

  static async create ({ input }) {
    const length = songs.length

    const newSong = { id: length + 1, ...input }

    songs.push(newSong)
    return songs
  }

  static async delete ({ id }) {

  }

  static async update ({ id, input }) {

  }
}
