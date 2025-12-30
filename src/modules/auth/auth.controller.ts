import { Request, Response } from 'express';
import { AuthService } from './auth.service';

export const AuthController = {
  async register(req: Request, res: Response) {
    const user = await AuthService.register(req.body);
    res.status(201).json(user);
  },

  async login(req: Request, res: Response) {
    const token = await AuthService.login(req.body);
    res.json(token);
  }
};
