import { TicketHistoryRepository } from './ticketHistory.repository';

export const TicketHistoryService = {
    async logStatusChange(params: {
    ticketId: string;
    fromStatus: any;
    toStatus: any;
    performedById: string;
}) {
    return TicketHistoryRepository.create({
        ticketId: params.ticketId,
        action: 'STATUS_CHANGED',
        fromStatus: params.fromStatus,
        toStatus: params.toStatus,
        performedById: params.performedById
    });
}
};
