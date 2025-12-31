"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketHistoryService = void 0;
const ticketHistory_repository_1 = require("./ticketHistory.repository");
exports.TicketHistoryService = {
    async logStatusChange(params) {
        return ticketHistory_repository_1.TicketHistoryRepository.create({
            ticketId: params.ticketId,
            action: 'STATUS_CHANGED',
            fromStatus: params.fromStatus,
            toStatus: params.toStatus,
            performedById: params.performedById
        });
    }
};
