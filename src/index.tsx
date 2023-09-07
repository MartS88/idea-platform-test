import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from './store/store'
import App from './App'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(


<Provider store={setupStore()}>

    <Router>
        <Routes>
            <Route path='/home' element={<App/>}/>
        </Routes>
    </Router>

</Provider>



);
