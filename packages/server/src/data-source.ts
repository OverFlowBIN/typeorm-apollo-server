import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { Product, User } from '../src/entities';

dotenv.config({ path: '.env' });
const { POSTGRES_HOST, POSTGRES_DB, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD } = process.env;
console.log( process.env)

const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: POSTGRES_HOST,
  port: parseInt(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: true,
  logging: true,
  entities: [User, Product],
  subscribers: [],
  migrations: [],
});

export default PostgresDataSource;