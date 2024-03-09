import { SongModel } from '../models/local-file/song.js'

export class songController {
  static async getRandom (req, res) {
    const song = await SongModel.getRandom()
    res.json(song)
  }

  static async getId (req, res) {
    const { id } = req.params
    const song = await SongModel.getId({ id })
    if (song) return res.json(song)
    res.status(404).json({ message: 'songs not found' })
  }

  static async create (req, res) {
    console.log(req.body)
    if (!req.body) {
      return res.status(400).json({ message: 'no created song' })
    }
    const newSong = await SongModel.create({ input: req.body })

    res.status(201).json(newSong)
  }

  static async delete (req, res) {
    res.status(404).json({ message: 'songs not found' })
  }

  static async update (req, res) {
    res.status(404).json({ message: 'songs not found' })
  }
}
