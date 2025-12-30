import { prisma } from '../../shared/database/prisma';

export const TicketHistoryRepository = {
    create(data: {
    ticketId: string;
    action: string;
    fromStatus?: any;
    toStatus?: any;
    performedById: string;
}) {
    return prisma.ticketHistory.create({ data });
},

    findByTicket(ticketId: string) {
    return prisma.ticketHistory.findMany({
        where: { ticketId },
        orderBy: { createdAt: 'asc' }
    });
}
};
