import * as dotenv from 'dotenv';
dotenv.config();
export const ServerConfig = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  CONSUL_PORT: parseInt(process.env.CONSUL_PORT),
  CONSUL_HOST: process.env.CONSUL_HOST,
  APPLICATION_HOST_NAME: process.env.APPLICATION_HOST_NAME,
  APPLICATION_SERVICE_NAME: process.env.APPLICATION_SERVICE_NAME,
};
