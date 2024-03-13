import { Router } from 'express'
import { createRouters } from './index.js'
import { BaseController } from '../controllers/index.js'
import { BaseModel } from '../models/mysql/index.js'
import { validateGenre, validatePartialGenre } from '../schemas/genre.js'

const genreModel = new BaseModel('genres')

const controller = new BaseController(validatePartialGenre, validateGenre, genreModel)

export const genreRouter = Router()
createRouters(controller, genreRouter)
