import { Router } from 'express';
import { TicketsController } from './tickets.controller';
import { authMiddleware } from '../../shared/middlewares/auth.middleware';

const router = Router();

router.post('/', authMiddleware, TicketsController.create);
router.get('/', authMiddleware, TicketsController.getAll);
router.patch('/:id/status', authMiddleware, TicketsController.updateStatus);
router.get('/:id/history', authMiddleware, TicketsController.getHistory);

export default router;
