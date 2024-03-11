import { Router } from 'express'
import { genreController } from '../controllers/genreController.js'

export const genreRouter = Router()

genreRouter.get('/', genreController.getAll)
genreRouter.get('/:id', genreController.getById)
genreRouter.post('/', genreController.create)
// genreRouter.delete('/:id', genreController.delete)
// genreRouter.patch('/:id', genreController.update)
