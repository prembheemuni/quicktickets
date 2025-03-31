import { Dialect } from 'sequelize';
export const databaseConfig = {
  development: {
    username: 'postgres',
    password: 'postgres123',
    database: 'paymentdb',
    host: 'localhost',
    port: 5433,
    dialect: 'postgres' as Dialect,
    logging: console.log,
  },
};
