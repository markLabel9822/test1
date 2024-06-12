/* eslint-disable max-len */
import dotenv from 'dotenv';

dotenv.config();

export const env = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  LOG_DIR: process.env.LOG_DIR || 'logs',

  LOG_FORMAT: process.env.LOG_FORMAT,
  FILE_PATH: process.env.FILE_PATH || './file',
  ORIGIN: process.env.ORIGIN,
  CREDENTIALS: process.env.CREDENTIALS,
  PORT: process.env.PORT || 8081,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DISPLAY_PLAYGROUND: String(process.env.DISPLAY_PLAYGROUND) !== 'false',
  REDIS_HOST: process.env.REDIS_HOST || 'localhost',
  REDIS_PORT: +process.env.REDIS_PORT || 6379,
  ENABLE_CACHE: process.env.ENABLE_CACHE === 'true',
  CACHE_KEY_PREFIX: process.env.CACHE_KEY_PREFIX || 'OUTSOURCE_SERVICE_LOCAL',
  DEFAULT_CACHE_EXPIRATION: +process.env.DEFAULT_CACHE_EXPIRATION || 60000,
  SECRET_KEY: process.env.SECRET_KEY || 'secretKey',
};
