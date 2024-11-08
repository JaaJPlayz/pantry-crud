import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: process.env.DB_NAME || 'mydb',
  user: process.env.DB_USER || 'myuser',
  password: process.env.DB_PASS || 'mypass',
  host: process.env.DB_HOST || 'localhost',
  port: 5432,
  ssl: true,
  clientMinMessages: 'notice',
});

export default sequelize;