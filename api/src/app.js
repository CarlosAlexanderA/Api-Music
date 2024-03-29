import express from 'express'
import { songRouter } from './routes/song.js'
import { genreRouter } from './routes/genre.js'
import { streamRouter } from './routes/stream.js'

export const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/song', songRouter)
app.use('/genre', genreRouter)
app.use('/stream', streamRouter)

app.listen(PORT, () => {
  console.log(`server listenin on http://localhost:${PORT}`)
})
