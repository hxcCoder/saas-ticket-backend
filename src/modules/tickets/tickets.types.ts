import { TicketPriority } from '@prisma/client';

export interface CreateTicketDTO {
    title: string;
    description: string;
    priority?: TicketPriority;
}

export interface UpdateTicketStatusDTO {
    status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
}
