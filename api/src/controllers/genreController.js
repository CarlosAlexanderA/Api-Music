import { genreModel } from '../models/mysql/index.js'

export class genreController {
  static async getAll (req, res) {
    const genres = await genreModel.getAll()
    res.json(genres)
  }

  static async getById (req, res) {
    const { id } = req.params
    const genre = await genreModel.getById({ id })
    if (genre) return res.json(genre)
    res.status(404).json({ message: 'genre not found' })
  }

  static async create (req, res) {
    if (!req.body) {
      return res.status(400).json({ message: 'no created song' })
    }
    const newGenre = await genreModel.create({ input: req.body })

    res.status(201).json(newGenre)
  }
}
