import { getRandomNum, readJson } from '../../src/utils.js'

const songs = readJson('../songs.json')

export class SongModel {
  static async getRandom () {
    const length = songs.length
    return songs[getRandomNum(length)]
  }

  static async getSearch ({ search }) {
    const songsList = songs.filter(item => Object.keys(item).filter(key => key !== 'rute' && key !== 'genre').some(key =>
      typeof item[key] === 'string' && item[key].toLowerCase().includes(search.toLowerCase())
    )
    )

    console.log(songsList)

    if (songsList.length !== 0) return songsList

    return undefined
  }
}
