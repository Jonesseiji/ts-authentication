import express, { Request, Response } from 'express'
import { AppDataSource } from './data-source'
import { PORT, MONGO_URL } from './config'

const app = express()

AppDataSource.initialize().then(() => {
  app.use(express.json())
  app.get('/', (req: Request, res: Response) => {
    return res.json('Database connected')
  })
  return app.listen(PORT)
})
