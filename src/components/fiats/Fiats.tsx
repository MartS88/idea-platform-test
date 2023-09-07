import React, {useState,useEffect} from 'react';
import s from './Fiats.module.scss'
import {useGetFiatsQuery} from "../../services/fiatsApi";
import {FiatCurrency} from "../../types/fiatTypes";
import {TicketData} from "../../types/types";
import {useAppSelector} from "../../hooks/reduxHooks";
import { updateTicketsPrice} from "../../store/slice/ticketsSlice";
import {useDispatch} from "react-redux";




const Fiats: React.FC<{ ticketData: TicketData[] }> = ({ ticketData }) => {

    const { data: fiatsList, isError, isLoading } = useGetFiatsQuery([]);
    const fiatsRates: FiatCurrency[] = fiatsList || [];

    const dispatch = useDispatch()
    const tickets = useAppSelector((state) => state.tickets.ticketsArr);
    const updatedTickets = useAppSelector((state) => state.tickets.updatedArr)

    const fiats = ['USD', 'EUR', 'GBP','RUB'];
    const [selectedFiat, setSelectedFiat] = useState<string>('');



    const handleChangeFiat = (fiat: string) => {

        setSelectedFiat(fiat);
        const rate = fiatsRates.find((item) => item.name === fiat)?.rate || 0;
        console.log('rate', rate)
        const updatedTicketsPrice = ticketData.map((ticket) => ({
            ...ticket,

            price: ((ticket.price * rate).toFixed(2) + ' ' + (fiat))
        }));
        dispatch(updateTicketsPrice(updatedTicketsPrice));
        console.log('tickets', tickets)

    };


    return (
        <div className={s.fiats}>
            <h2 className={s.fiats_title}>Currency</h2>
            <div className={s.currency_block}>
                <ul>
                    {fiats.map((fiat) => (
                        <li
                            key={fiat}
                            className={fiat === selectedFiat ? s.active : ''}
                            onClick={() => handleChangeFiat(fiat)}
                        >
                            {fiat}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Fiats;


