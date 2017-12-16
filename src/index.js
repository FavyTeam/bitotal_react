import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import Account from './components/account';
import Withdraw from './components/withdraw';
import Orders from './components/orders';
import Home from './components/home';
import Funds from './components/funds';
import Tradehistory from './components/tradehistory';
import Apikeys from "./components/apikeys";
import Avatar from "./components/avatar";
import Changepassword from './components/changepassword';
import Docs from './components/docs';
import Editprofile from './components/editprofile';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/account' component={Account} />
            <Route path='/withdraw' component={Withdraw} />
            <Route path='/orders' component={Orders} />
            <Route path='/home' component={Home} />
            <Route path='/funds' component={Funds} />
            <Route path='/apikeys' component={Apikeys} />
            <Route path='/tradehistory' component={Tradehistory} />
            <Route path='/avatar' component={Avatar} />
            <Route path='/changepassword' component={Changepassword} />
            <Route path='/docs' component={Docs}/>
            <Route path='/editprofile' component={Editprofile}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);