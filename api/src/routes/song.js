import { Router } from 'express'
import { songController } from '../controllers/songController.js'

export const songRouter = Router()

songRouter.get('/', songController.getAll)
songRouter.get('/:id', songController.getById)
songRouter.post('/', songController.create)
songRouter.delete('/:id', songController.delete)
songRouter.patch('/:id', songController.update)
