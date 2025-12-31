"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketHistoryRepository = void 0;
const prisma_1 = require("../../shared/database/prisma");
exports.TicketHistoryRepository = {
    create(data) {
        return prisma_1.prisma.ticketHistory.create({ data });
    },
    findByTicket(ticketId) {
        return prisma_1.prisma.ticketHistory.findMany({
            where: { ticketId },
            orderBy: { createdAt: 'asc' }
        });
    }
};
