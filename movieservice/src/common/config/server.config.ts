import * as dotenv from 'dotenv';
dotenv.config();
export const ServerConfig = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
};
