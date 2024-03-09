import { songModel } from '../models/mysql/index.js'

export class songController {
  static async getRandom (req, res) {
    const song = await songModel.getRandom()
    res.json(song)
  }

  static async getById (req, res) {
    const { id } = req.params
    const song = await songModel.getById({ id })
    if (song) return res.json(song)
    res.status(404).json({ message: 'songs not found' })
  }

  static async create (req, res) {
    if (!req.body) {
      return res.status(400).json({ message: 'no created song' })
    }
    const newSong = await songModel.create({ input: req.body })

    res.status(201).json(newSong)
  }

  static async delete (req, res) {
    res.status(404).json({ message: 'songs not found' })
  }

  static async update (req, res) {
    res.status(404).json({ message: 'songs not found' })
  }
}
