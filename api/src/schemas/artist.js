import z from 'zod'

const artistSchema = z.object({
  name: z.string({
    invalid_type_error: 'Artist names must be a string',
    required_error: 'Artist name is required'
  }).max(50),
  profile_photo: z.string(),
  biograpy: z.string().max(255),
  followers: z.number(),
  created_at: z.coerce.date().nullable()

})

export function validateArtist (object) {
  return artistSchema.safeParse(object)
}

export function validatePartialArtist (object) {
  return artistSchema.partial().safeParse(object)
}
