import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

export const readJson = (path) => require(path)

export const getRandomNum = (num) => {
  return Math.floor(Math.random() * (num + 1))
}
