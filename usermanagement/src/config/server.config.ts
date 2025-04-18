import * as dotenv from 'dotenv';

dotenv.config();

export const ServerConfig = {
  POSTGRES_USERNAME: process.env.POSTGRES_USERNAME,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_PORT: parseInt(process.env.POSTGRES_PORT),
  PORT: process.env.PORT,
  CONSUL_PORT: parseInt(process.env.CONSUL_PORT),
  CONSUL_HOST: process.env.CONSUL_HOST,
  APPLICATION_HOST_NAME: process.env.APPLICATION_HOST_NAME,
  APPLICATION_SERVICE_NAME: process.env.APPLICATION_SERVICE_NAME,
  KAFKA_HOST: process.env.KAFKA_HOST,
};
