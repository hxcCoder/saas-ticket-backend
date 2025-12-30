    import { Request, Response } from 'express';
import { TicketsService } from './tickets.service';
import { TicketHistoryRepository } from '../ticket-history/ticketHistory.repository';

export const TicketsController = {
async create(req: Request, res: Response) {
    const userId = (req as any).user.userId;
    const ticket = await TicketsService.createTicket(userId, req.body);
    res.status(201).json(ticket);
},

async getAll(req: Request, res: Response) {
    const { userId, role } = (req as any).user;
    const tickets = await TicketsService.getTickets(userId, role);
    res.json(tickets);
},

    async updateStatus(req: Request, res: Response) {
    const { userId, role } = (req as any).user;
    const ticket = await TicketsService.updateStatus(
        req.params.id,
        userId,
        role,
        req.body
    );
    res.json(ticket);
}, 
async getHistory(req: Request, res: Response) {
    const history = await TicketHistoryRepository.findByTicket(req.params.id);
    res.json(history);
}

};

