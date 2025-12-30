import { Router } from 'express';
import { UsersController } from './users.controller';
import { authMiddleware } from '../../shared/middlewares/auth.middleware';

const router = Router();

router.get('/me', authMiddleware, UsersController.getProfile);
router.put('/me', authMiddleware, UsersController.updateProfile);
router.get('/', authMiddleware, UsersController.getAll);

export default router;
    