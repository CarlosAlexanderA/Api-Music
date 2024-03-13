import z from 'zod'

const genreSchema = z.object({
  name: z.string({
    invalid_type_error: 'Genre names must be a string',
    required_error: 'Genre name is required'
  })

})

export function validateGenre (object) {
  return genreSchema.safeParse(object)
}

export function validatePartialGenre (object) {
  return genreSchema.partial().safeParse(object)
}
