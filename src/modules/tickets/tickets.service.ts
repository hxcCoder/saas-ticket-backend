import { TicketsRepository } from './tickets.repository';
import { TicketHistoryService } from '../ticket-history/ticketHistory.service';
import { CreateTicketDTO, UpdateTicketStatusDTO } from './tickets.types';

export const TicketsService = {
    async createTicket(userId: string, data: CreateTicketDTO) {
    const ticket = await TicketsRepository.create({
        title: data.title,
        description: data.description,
        priority: data.priority || 'MEDIUM',
        createdById: userId
    });

    // Historial de creación
    await TicketHistoryService.logStatusChange({
        ticketId: ticket.id,
        fromStatus: null,
        toStatus: ticket.status,
        performedById: userId
    });

    return ticket;
},

    async getTickets(userId: string, role: string) {
    if (role === 'ADMIN') {
        return TicketsRepository.findAll();
    }
    return TicketsRepository.findByUser(userId);
},

    async updateStatus(
    ticketId: string,
    userId: string,
    role: string,
    data: UpdateTicketStatusDTO
) {
    const ticket = await TicketsRepository.findById(ticketId);
    if (!ticket) throw new Error('Ticket not found');

    if (role !== 'ADMIN' && ticket.createdById !== userId) {
        throw new Error('Forbidden');
    }

    const updated = await TicketsRepository.updateStatus(
        ticketId,
        data.status
    );

    await TicketHistoryService.logStatusChange({
        ticketId,
        fromStatus: ticket.status,
        toStatus: data.status,
        performedById: userId
    });

    return updated;
}
};
