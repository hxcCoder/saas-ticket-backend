import { prisma } from '../../shared/database/prisma';

export const TicketsRepository = {
    create(data: {
    title: string;
    description: string;
    priority: any;
    createdById: string;
}) {
    return prisma.ticket.create({
        data
    });
},

    findByUser(userId: string) {
    return prisma.ticket.findMany({
        where: { createdById: userId },
        orderBy: { createdAt: 'desc' }
    });
},

findAll() {
    return prisma.ticket.findMany({
        orderBy: { createdAt: 'desc' }
    });
},

    findById(id: string) {
    return prisma.ticket.findUnique({ where: { id } });
    },

    updateStatus(id: string, status: any) {
    return prisma.ticket.update({
        where: { id },
        data: { status }
    });
    }
};
