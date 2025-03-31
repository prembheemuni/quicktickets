import { Dialect } from 'sequelize';
export const databaseConfig = {
  development: {
    username: 'postgres',
    password: 'postgres123',
    database: 'usersdb',
    host: 'localhost',
    port: 5433,
    dialect: 'postgres' as Dialect,
    logging: console.log,
    autoLoadModels: true,
    synchronize: true,
  },
};
