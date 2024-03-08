import { SongModel } from '../models/local-file/songs.js'

export class songController {
  static async getRandom (req, res) {
    const song = await SongModel.getRandom()
    res.json(song)
  }

  static async getSearch (req, res) {
    const { search } = req.params
    const songs = await SongModel.getSearch({ search })
    if (songs) return res.json(songs)
    res.status(404).json({ message: 'songs not found' })
  }

  static async getGenre (req, res) {
    res.status(404).json({ message: 'songs not found' })
  }
}
