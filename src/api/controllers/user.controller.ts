import { NextFunction, Request, Response } from 'express';
import userService from 'api/services/user.services';
class UserController {
  public userService = new userService();
  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const result = await this.userService.getAll();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
