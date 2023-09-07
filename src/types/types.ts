export interface TicketData {
    id: number;
    price: number;
    origin: string;
    destination: string;
    stops: number;
    company: string;
    departureTime: string,
    arrivalTime: string,
    logoUrl: string;
    flightNumber: string
}

export type Filter = number[];