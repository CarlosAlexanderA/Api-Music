import { Router } from 'express'
import { songController } from '../controllers/songController.js'

export const artistRouter = Router()

artistRouter.get('/', songController.getRandom)
artistRouter.get('/:id', songController.getId)
