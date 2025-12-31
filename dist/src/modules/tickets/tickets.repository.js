"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsRepository = void 0;
const prisma_1 = require("../../shared/database/prisma");
exports.TicketsRepository = {
    create(data) {
        return prisma_1.prisma.ticket.create({
            data
        });
    },
    findByUser(userId) {
        return prisma_1.prisma.ticket.findMany({
            where: { createdById: userId },
            orderBy: { createdAt: 'desc' }
        });
    },
    findAll() {
        return prisma_1.prisma.ticket.findMany({
            orderBy: { createdAt: 'desc' }
        });
    },
    findById(id) {
        return prisma_1.prisma.ticket.findUnique({ where: { id } });
    },
    updateStatus(id, status) {
        return prisma_1.prisma.ticket.update({
            where: { id },
            data: { status }
        });
    }
};
