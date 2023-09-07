import React, { useState } from 'react';
import s from './Stops.module.scss';
import { GiAirplaneArrival } from 'react-icons/gi';
import { TicketData } from '../../types/types';
import {useDispatch} from "react-redux";
import {updateTicketsArr, } from "../../store/slice/ticketsSlice";
import {useAppSelector} from "../../hooks/reduxHooks";


type StopOption = {
    label: string;
    value: string;
};

type FilterOption = {
    label: string;
    value: string;
    img: string;
};

const Stops: React.FC = () => {

    // SDELAT LOGO V COMPANY !!!


    const dispatch = useDispatch();
    const updatedTickets: TicketData[] = useAppSelector((state) => state.tickets.updatedArr);

    const stops: StopOption[] = [
        { label: 'Without stops', value: '0' },
        { label: '1 stop', value: '1' },
        { label: '2 stops', value: '2' },
        { label: '3 stops', value: '3' },
    ];

    const companyOptions: FilterOption[] = [
        { label: 'Delta Air Lines', value: 'Delta Air Lines' , img: 'https://th.bing.com/th/id/OIP.K3j414uBF-eA15cb0fEkfQHaEK?pid=ImgDet&rs=1' },
        { label: 'American Airlines', value: 'American Airlines', img: 'https://th.bing.com/th/id/R.dc0886e904b949612890b814feef76c2?rik=uBBFT2JkXRqcRQ&pid=ImgRaw&r=0' },
        { label: 'Alaska Airlines', value: 'Alaska Airlines', img: 'https://th.bing.com/th/id/R.2f5befb4c9d9e8de560c5ccb614f8a3d?rik=pcdPHjm8EpzzBA&pid=ImgRaw&r=0' },
        { label: 'United Airlines', value: 'United Airlines', img: 'https://logos-world.net/wp-content/uploads/2020/11/United-Airlines-Logo-1974-1993.png' },
    ];


    const [selectedStops, setSelectedStops] = useState<string[]>([]);
    const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);


    const handleToggleFilter = (value: string, filterType: string) => {
        if (value === '0' && filterType === 'stops') {

            setSelectedStops(['0']);
        } else if (filterType === 'stops') {
            setSelectedStops((prevSelected) => {
                if (prevSelected.includes('0')) {
                    return prevSelected.filter((selected) => selected !== '0');
                } else {
                    return prevSelected.includes(value)
                        ? prevSelected.filter((selected) => selected !== value)
                        : [...prevSelected, value];
                }
            });
        } else if (filterType === 'company') {
            setSelectedCompanies((prevSelected) =>
                prevSelected.includes(value)
                    ? prevSelected.filter((selected) => selected !== value)
                    : [...prevSelected, value]
            );
        }
    };

    const filterTickets = (ticketData: TicketData[]) => {

        let filteredTickets = ticketData;
        if (selectedStops.length > 0) {
            filteredTickets = filteredTickets.filter((ticket) =>
                selectedStops.includes(ticket.stops.toString())
            );
        }

        if (selectedCompanies.length > 0) {
            filteredTickets = filteredTickets.filter((ticket) =>
                selectedCompanies.includes(ticket.company)
            );
        }

            dispatch(updateTicketsArr(filteredTickets))
            return filteredTickets;

    };

    const filteredTickets = filterTickets(updatedTickets);




    return (
        <div className={s.stops}>
            <h2>Number of transfers</h2>
            <form>
                {stops.map((stop) => (
                    <label key={stop.value}>
                        <input
                            type="checkbox"
                            value={stop.value}
                            checked={selectedStops.includes(stop.value)}
                            onChange={() => handleToggleFilter(stop.value, 'stops')}
                        />
                        <span>{stop.label}</span>
                        <GiAirplaneArrival size={16} />
                    </label>
                ))}
            </form>
            <h2>Company</h2>
            <form>
                {companyOptions.map((company) => (
                    <label key={company.value}>
                        <input
                            type="checkbox"
                            value={company.value}
                            checked={selectedCompanies.includes(company.value)}
                            onChange={() => handleToggleFilter(company.value, 'company')}
                        />
                        <span>{company.label}</span> <img src={company.img} width={40}/>

                    </label>
                ))}
            </form>
        </div>
    );
};

export default Stops;
