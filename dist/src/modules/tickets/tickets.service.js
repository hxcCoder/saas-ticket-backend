"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsService = void 0;
const tickets_repository_1 = require("./tickets.repository");
const ticketHistory_service_1 = require("../ticket-history/ticketHistory.service");
exports.TicketsService = {
    async createTicket(userId, data) {
        const ticket = await tickets_repository_1.TicketsRepository.create({
            title: data.title,
            description: data.description,
            priority: data.priority || 'MEDIUM',
            createdById: userId
        });
        // Historial de creación
        await ticketHistory_service_1.TicketHistoryService.logStatusChange({
            ticketId: ticket.id,
            fromStatus: null,
            toStatus: ticket.status,
            performedById: userId
        });
        return ticket;
    },
    async getTickets(userId, role) {
        if (role === 'ADMIN') {
            return tickets_repository_1.TicketsRepository.findAll();
        }
        return tickets_repository_1.TicketsRepository.findByUser(userId);
    },
    async updateStatus(ticketId, userId, role, data) {
        const ticket = await tickets_repository_1.TicketsRepository.findById(ticketId);
        if (!ticket)
            throw new Error('Ticket not found');
        if (role !== 'ADMIN' && ticket.createdById !== userId) {
            throw new Error('Forbidden');
        }
        const updated = await tickets_repository_1.TicketsRepository.updateStatus(ticketId, data.status);
        await ticketHistory_service_1.TicketHistoryService.logStatusChange({
            ticketId,
            fromStatus: ticket.status,
            toStatus: data.status,
            performedById: userId
        });
        return updated;
    }
};
