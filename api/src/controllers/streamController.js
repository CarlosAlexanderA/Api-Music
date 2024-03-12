import { streamModel } from '../models/mysql/stream.js'
// import path from 'node:path'
// import { fileURLToPath } from 'node:url'

import mediaserver from 'mediaserver'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

export class StreamController {
  static async getById (req, res) {
    const { id } = req.params
    const songLink = await streamModel.getById({ id })
    // const song = await streamModel.getById({ id })
    // const url = '/media/carlos/Disco Project/repos/Api-Music/api/songs/pop rock/Avril Lavigne/Let Go/Avril Lavigne - Complicated (Official Video).mp3'
    console.log(songLink)
    // if (song) return res.json(song)
    // res.status(404).json({ message: 'song not found' })

    mediaserver.pipe(req, res, songLink)
  }
}
