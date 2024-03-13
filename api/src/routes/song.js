import { Router } from 'express'
import { createRouters } from './index.js'
import { BaseController } from '../controllers/index.js'
import { validatePartialSong, validateSong } from '../schemas/song.js'
import { BaseModel } from '../models/mysql/index.js'

const songModel = new BaseModel('songs')

const controller = new BaseController(validatePartialSong, validateSong, songModel)

export const songRouter = Router()
createRouters(controller, songRouter)
