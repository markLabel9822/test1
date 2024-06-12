import UserController from 'api/controllers/user.controller';
import { Routes } from 'api/interfaces/routes.interface';
import { Router } from 'express';

class UserRoute implements Routes {
  public path = '/user';
  public router = Router();
  public UserController = new UserController();

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(`${this.path}/getAll`, this.UserController.getAll);
  }
}

export default UserRoute;
