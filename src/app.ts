import { Routes } from 'api/interfaces/routes.interface';

import compression from 'compression';
import { env } from 'config/env';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import { logger, stream } from 'libs/utils/logger';
import morgan from 'morgan';

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = env.NODE_ENV || 'development';
    this.port = env.PORT || 3000;

    this.initializeMiddleware();
    this.initializeRoutes(routes);

  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info('=================================');
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port http://localhost:${this.port}`);
      logger.info('=================================');
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddleware() {
    this.app.use(morgan(env.LOG_FORMAT, { stream }));
    this.app.use(cors({ origin: env.ORIGIN }));
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(express.json({ limit: '1000mb' }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use('/', route.router);
    });
  }


}

export default App;
