import React, { useEffect } from 'react';
import s from './Tickets.module.scss'
import { useAppSelector} from '../../hooks/reduxHooks';
import {IoAirplaneOutline} from 'react-icons/io5'
import {TicketData} from "../../types/types";
import Logo from '../../components/logo/Logo'



const Tickets: React.FC<{ tickets: TicketData[] }> = ({ tickets }) => {

    const updatedTickets: TicketData[] = useAppSelector((state) => state.tickets.updatedArr);
    const displayMode = useAppSelector((state) => state.tickets.displayMode)
    const ticketsArr: TicketData[] = useAppSelector((state) => state.tickets.ticketsArr);
    const updatedArr: TicketData[] = useAppSelector((state) => state.tickets.updatedArr);



    if (updatedTickets.length === 0){
        return <div className={s.to_start}>

            <Logo/>
            <p>Welcome to Idea Platform Art Fly scanner.</p>
            <p>To find your flight, select the currency!</p>


        </div>;
    }


    return (
        <div className={s.tickets}>
            {displayMode === 'updatedArr' ? (
                updatedArr.map((ticket) => (
                    <div className={s.ticket} key={ticket.id}>
                        <div className={s.info}>
                            <img width={200} src={ticket.logoUrl} draggable={false} alt="Logo" />
                            <button>Buy <br/>{ticket.price}</button>
                        </div>
                        <div className={s.location}>
                            <div className={s.departure}>
                                <p>{ticket.departureTime}</p>
                                <span>{ticket.origin}</span>
                            </div>

                            <div className={s.way}>
                                <p>Stops {ticket.stops}</p>
                                <div className={s.airplane}>
                                    <span></span> <IoAirplaneOutline size={21} />
                                </div>
                                <span className={s.flight_number}>Flight number {ticket.flightNumber}</span>
                            </div>
                            <div className={s.arrival}>
                                <p>{ticket.arrivalTime}</p>
                                <span>{ticket.destination} </span>
                            </div>
                        </div>
                    </div>
                ))
            ) : displayMode === 'ticketsArr' ? (
                ticketsArr.length === 0 ? (
                    <div className={s.no_tickets}><p>No tickets available, choose another direction!</p></div>
                ) : (
                    ticketsArr.map((ticket) => (
                        <div className={s.ticket} key={ticket.id}>
                            <div className={s.info}>
                                <img width={200} src={ticket.logoUrl} draggable={false} alt="Logo" />
                                <button>Buy <br/>{ticket.price}</button>
                            </div>
                            <div className={s.location}>
                                <div className={s.departure}>
                                    <p>{ticket.departureTime}</p>
                                    <span>{ticket.origin}</span>
                                </div>

                                <div className={s.way}>
                                    <p>Stops {ticket.stops}</p>
                                    <div className={s.airplane}>
                                        <span></span> <IoAirplaneOutline size={21} />
                                    </div>
                                    <span className={s.flight_number}>Flight number {ticket.flightNumber}</span>
                                </div>
                                <div className={s.arrival}>
                                    <p>{ticket.arrivalTime}</p>
                                    <span>{ticket.destination} </span>
                                </div>
                            </div>
                        </div>
                    ))
                )
            ) : (
                <div>SHTO ETO</div>
            )}
        </div>
    );
};

export default Tickets;
