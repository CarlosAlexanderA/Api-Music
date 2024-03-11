import { songModel } from '../models/mysql/index.js'
import { validatePartialSong, validateSong } from '../schemas/song.js'

export class songController {
  static async getAll (req, res) {
    const songs = await songModel.getAll()
    res.json(songs)
  }

  static async getById (req, res) {
    const { id } = req.params
    const song = await songModel.getById({ id })
    if (song) return res.json(song)
    res.status(404).json({ message: 'songs not found' })
  }

  static async create (req, res) {
    const result = validateSong(req.body)

    if (!result.success) {
      return res.status(400).json({ message: JSON.parse(result.error.message) })
    }
    const newSong = await songModel.create({ input: req.body })

    res.status(201).json(newSong)
  }

  static async delete (req, res) {
    const { id } = req.params
    const result = await songModel.delete({ id })

    if (!result) return res.status(404).json({ message: 'song not found' })

    return res.json(result)
  }

  static async update (req, res) {
    const result = validatePartialSong(req.body)

    if (!result.success) { return res.status(400).json({ message: JSON.parse(result.error.message) }) }

    const { id } = req.params

    const updateSong = await songModel.update({ id, input: req.body })

    res.json(updateSong)
  }
}
