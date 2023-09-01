import { Sequelize } from 'sequelize-typescript';
import * as models from './models'


const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'postDb',
  username: 'postgres',
  password: 'postDb',
  host: 'localhost',
  port: 5432,
  models: Object.values(models),
});

export default sequelize;