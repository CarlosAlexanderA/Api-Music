import { Router } from 'express'
import { createRouters } from './index.js'
import { BaseController } from '../controllers/index.js'
import { validatePartialSong, validateSong } from '../schemas/song.js'
import { songModel } from '../models/mysql/index.js'

const controller = new BaseController(validatePartialSong, validateSong, songModel)

export const songRouter = Router()
createRouters(controller, songRouter)
