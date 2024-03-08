import express from 'express'
import { songRouter } from './routes/song.js'

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/songs', songRouter)

app.listen(PORT, () => {
  console.log(`server listenin on http://localhost:${PORT}`)
})
