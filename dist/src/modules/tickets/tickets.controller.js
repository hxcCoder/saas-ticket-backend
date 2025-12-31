"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsController = void 0;
const tickets_service_1 = require("./tickets.service");
const ticketHistory_repository_1 = require("../ticket-history/ticketHistory.repository");
exports.TicketsController = {
    async create(req, res) {
        const userId = req.user.userId;
        const ticket = await tickets_service_1.TicketsService.createTicket(userId, req.body);
        res.status(201).json(ticket);
    },
    async getAll(req, res) {
        const { userId, role } = req.user;
        const tickets = await tickets_service_1.TicketsService.getTickets(userId, role);
        res.json(tickets);
    },
    async updateStatus(req, res) {
        const { userId, role } = req.user;
        const ticket = await tickets_service_1.TicketsService.updateStatus(req.params.id, userId, role, req.body);
        res.json(ticket);
    },
    async getHistory(req, res) {
        const history = await ticketHistory_repository_1.TicketHistoryRepository.findByTicket(req.params.id);
        res.json(history);
    }
};
