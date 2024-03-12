import { Router } from 'express'
import { StreamController } from '../controllers/streamController.js'
// ruta para hacer el streaming de la cancion
export const streamRouter = Router()

streamRouter.get('/:id', StreamController.getById)
