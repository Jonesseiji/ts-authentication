import { DataSource } from 'typeorm'
import { DB_PORT, PORT, NODE_ENV, MONGO_URL } from './config'

export const AppDataSource = new DataSource({
  name: 'mongo',
  type: 'mongodb',
  url: MONGO_URL,
  host: DB_PORT,
  entities: [],
  useNewUrlParser: true,
  useUnifiedTopology: true,
  synchronize: NODE_ENV === 'test'
})
