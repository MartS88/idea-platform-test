import React from 'react';
import './index.scss'
import s from './App.module.scss'
import Logo from "./components/logo/Logo";
import Block from "./components/block/Block";
import Block2 from "./components/block2/Block2";

const App: React.FC = () => {


    return (
        <div className={s.app}>
            <div className={s.logo}>
                <Logo/>
            </div>

            <div className={s.wrapper}>
                <Block/>
                <Block2/>
            </div>
        </div>
    );
};

export default App;