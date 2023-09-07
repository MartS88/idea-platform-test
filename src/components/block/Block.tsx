import React from 'react';
import s from './Block.module.scss'
import Fiats from '../fiats/Fiats';
import Stops from '../stops/Stops';
import ticketsData from '../../data/tickets.json';

const App: React.FC = () => {
    return (
        <div className="App">

            <div className={s.block}>

                <Fiats ticketData={ticketsData.tickets} />
                <Stops/>

            </div>
        </div>
    );
};

export default App;
