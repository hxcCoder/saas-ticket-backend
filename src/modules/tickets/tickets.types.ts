export type TicketPriority = 'LOW' | 'MEDIUM' | 'HIGH';

export interface CreateTicketDTO {
    title: string;
    description: string;
    priority?: TicketPriority; // usa este tipo
}

export interface UpdateTicketStatusDTO {
    status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
}
