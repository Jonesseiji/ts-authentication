import * as dotenv from 'dotenv'
import * as path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../.env')
})

export const PORT = process.env.PORT as number | undefined
export const DB_PORT = process.env.DB_PORT
export const MONGO_URL = '' + process.env.MONGO_URL
export const SECRET = process.env.SECRET
export const NODE_ENV = process.env.NODE_ENV
