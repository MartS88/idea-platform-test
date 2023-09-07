import React, {} from 'react';
import s from './Block2.module.scss'
import Tickets from "../tickets/Tickets";
import ticketsData from "../../data/tickets.json";


const Block2 = () => {


    return (

        <div className={s.block2}>
            <Tickets tickets={ticketsData.tickets}/>
        </div>
    );
};

export default Block2;


