import z from 'zod'

const songSchema = z.object({
  name: z.string({ invalid_type_error: 'Song names must be a string', required_error: 'song name is required' }),
  duration: z.number().int().max(600),
  release_date: z.coerce.date(),
  link: z.string().refine(path => {
    // Expresión regular para validar que la ruta del archivo termine con ".mp3"
    const regex = /.+\.mp3$/
    return regex.test(path)
  }, {
    message: 'La ruta del archivo no termina con ".mp3"'
  })
})

export function validateSong (object) {
  return songSchema.safeParse(object)
}

export function validatePartialSong (object) {
  return songSchema.partial().safeParse(object)
}
