import { Router } from 'express'
import { genreController } from '../controllers/genreController.js'
import { createRouters } from './index.js'

export const genreRouter = Router()
// createRouters(genreController, genreRouter)
