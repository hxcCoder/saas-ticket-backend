import express from 'express';
import authRoutes from './modules/auth/auth.routes';
import usersRoutes from './modules/users/users.routes';
import ticketsRoutes from './modules/tickets/tickets.routes';

export const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', usersRoutes);
app.use('/tickets', ticketsRoutes);
