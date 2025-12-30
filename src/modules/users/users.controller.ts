import { Request, Response } from 'express';
import { UsersService } from './users.service';

export const UsersController = {
  async getProfile(req: Request, res: Response) {
    const userId = (req as any).user.userId;
    const user = await UsersService.getProfile(userId);
    res.json(user);
  },

  async getAll(req: Request, res: Response) {
    const role = (req as any).user.role;
    const users = await UsersService.getAllUsers(role);
    res.json(users);
  },

  async updateProfile(req: Request, res: Response) {
    const userId = (req as any).user.userId;
    const updated = await UsersService.updateProfile(userId, req.body);
    res.json(updated);
  }
};
