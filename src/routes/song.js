import { Router } from 'express'
import { songController } from '../controllers/songController.js'

export const songRouter = Router()

songRouter.get('/', songController.getRandom)
songRouter.get('/:search', songController.getSearch)
songRouter.get('/:genre', songController.getGenre)
